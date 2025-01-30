require 'sinatra'
require 'net/http'
require 'uri'
require 'fileutils'

# Directory to store the image
IMAGE_DIR = File.join(Dir.pwd, 'public', 'images')

# Path to the image file
IMAGE_FILE = "#{IMAGE_DIR}/random_image.jpg"
# const PING_PONG_ENDPOINT = process.env.PING_PONG_ENDPOINT;
TODO_ENDPOINT = ENV['TODO_ENDPOINT']

# const PING_PONG_ENDPOINT = process.env.PING_PONG_ENDPOINT;

PORT = ENV['PORT'] || 4567
set :bind, '0.0.0.0'
set :port, PORT
set :public_folder, '/app/public'

puts "Todo app listening on PORT #{PORT}"

# Route to display the image
get '/todo-app' do
  puts "*******get /todo-app******************"
  if !File.exist?(IMAGE_FILE) || Time.now - File.mtime(IMAGE_FILE) > 60 * 60
    uri = URI('https://picsum.photos/1200')
    download_image(uri, IMAGE_FILE)
  end
  
  @image_path = '/images/random_image.jpg'

  @todos = fetch_todos

  erb :index
end

post '/todo-app/add_todo' do
  todo_text = params[:todo].strip

  uri = URI("#{TODO_ENDPOINT}/todo-backend/todos")
  request = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
  request.body = { todo: todo_text }.to_json
  response = Net::HTTP.start(uri.hostname, uri.port) do |http|
    http.request(request)
  end
  if response.is_a?(Net::HTTPSuccess)
    redirect '/todo-app'
  else
    halt 500, "Error submitting todo"
  end
end


def download_image(url, image_file_path, limit=2)
  raise 'Too many HTTP redirects' if limit == 0

  uri = URI.parse(url)
  response = Net::HTTP.get_response(uri)

  case response
  when Net::HTTPSuccess
    File.open(image_file_path, 'wb') do |file|
      file.write(response.body)
    end
  when Net::HTTPRedirection
    location = response['location']
    download_image(location, image_file_path, limit-1)
  end
end

def fetch_todos
  uri = URI("#{TODO_ENDPOINT}/todo-backend/todos")
  p uri
  response = Net::HTTP.get(uri)
  p response
  data = JSON.parse(response) rescue {}
  p data
  data["todos"] || []
end

