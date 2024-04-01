# Use an appropriate base image with a web server installed, such as Nginx
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, JavaScript files, and any other static assets into the container
COPY index.html style.css script.js icon.png checked.png unchecked.png ./

# Expose port 80 to allow external access to the web application
EXPOSE 80

# Start the web server when the container starts
CMD ["nginx", "-g", "daemon off;"]
