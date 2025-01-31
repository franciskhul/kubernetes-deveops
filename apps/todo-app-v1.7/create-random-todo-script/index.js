const axios = require("axios");

const TODO_BACKEND = process.env.TODO_BACKEND;

// Function to create a todo
const createTodo = async (todo) => {
  try {
    const response = await axios.post(TODO_BACKEND, {
      todo: todo,
    });
    console.log("Todo created:", response.data);
  } catch (error) {
    console.error("Error creating todo:", error);
  }
};

// Function to fetch a random Wikipedia page URL
const getRandomWikipediaURL = async () => {
  try {
    const response = await axios.get(
      "https://en.wikipedia.org/wiki/Special:Random",
      {
        maxRedirects: 0, // We need to catch the redirection
        validateStatus: (status) => status >= 300 && status < 400, // Handle redirects
      }
    );
    const redirectUrl = response.headers.location;
    return redirectUrl;
  } catch (error) {
    console.error("Error fetching random Wikipedia article:", error);
    return null;
  }
};

// Main function to generate a todo every hour
const generateTodo = async () => {
  const randomUrl = await getRandomWikipediaURL();
  if (randomUrl) {
    const todoMessage = `Read ${randomUrl}`;
    await createTodo(todoMessage);
  } else {
    console.log("Failed to generate random Wikipedia URL");
  }
};

generateTodo();
