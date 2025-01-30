require 'sinatra'
require 'net/http'
require 'uri'
require 'fileutils'

# Directory to store the image
IMAGE_DIR = File.join(Dir.pwd, 'public', 'images')

# Path to the image file
IMAGE_FILE = "#{IMAGE_DIR}/random_image.jpg"

puts "PORT: #{ENV['PORT']}"
set :port, ENV['PORT'] || 4567

# Route to display the image
get '/' do
  if !File.exist?(IMAGE_FILE) || Time.now - File.mtime(IMAGE_FILE) > 60 * 60
    uri = URI('https://picsum.photos/1200')
    download_image(uri, IMAGE_FILE)
  end
  
  @image_path = '/images/random_image.jpg'

  @todos = ['Buy groceries', 'Complete project', 'Clean the house']

  erb :index
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

