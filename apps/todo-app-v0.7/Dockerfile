# Use Ruby 3.3.0 as the base image
FROM ruby:3.3.0

# Install necessary dependencies
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# Set the working directory inside the container
WORKDIR /app

# Copy Gemfile and Gemfile.lock first to install gems
COPY Gemfile Gemfile.lock ./

# Install the required Ruby gems
RUN bundle install

# Copy the rest of the app files into the container
COPY . .

# Start the Sinatra application
CMD ["ruby", "app.rb"]