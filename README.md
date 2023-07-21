# chat-app

This is a chat application built using React Chat Engine that allows multiple users to chat with each other in various chat rooms. The app provides a user-friendly interface for real-time messaging and collaboration.

## Live Demo

You can access the live demo of the chat app by following this link: [Chat App Live Demo](https://64ba6601f2fd080821f7de51--grand-haupia-abb591.netlify.app/)

## Features

- Multiple users can chat in real-time.
- Users can join different chat rooms based on their interests or topics.
- Admin can add members to the chat, and they can participate in conversations.
- Custom authentication mechanism using a backend server.

## Usage

1. Go to the [Chat Engine website](https://chatengine.io/) and sign up for an account.
2. Create a new project and note down your Chat Engine project ID.
3. Obtain API credentials (Project ID, Private Key, and Public Key) from the Chat Engine dashboard.
4. Access the live demo link of the chat app.
5. In this case  Log in using one of the following predefined users:
   - Username: saswata, Password: 12345
   - Username: abc, Password: 54321
   - Username: subhodeep, Password: 654123
6. Start chatting with other users or create new chat rooms.


## Adding Members

As an admin, you can easily add new members to the chat via the Chat Engine website. Follow these steps to add new members:

1. Go to the [Chat Engine website](https://chatengine.io/) and log in to your account.
2. In the Chat Engine dashboard, select the project you are using for your chat app.
3. Click on the "Users" tab in the left-hand menu to view the list of existing users.
4. To add a new member, click the "Add User" button.
5. Provide a unique username and a secure password for the new member.
6. Optionally, you can add additional details such as the member's email address or profile picture.
7. Click the "Create User" button to add the new member to the project.

Once you've added new members via the Chat Engine website, they can log in to the chat app using the credentials you provided.

Please note that using the Chat Engine website to add members is a convenient method for testing and managing smaller chat applications. For larger and more complex systems, you might want to explore integrating your application with a backend server to handle user authentication and management more securely.

Remember to keep your project credentials (Project ID, Private Key, and Public Key) secure and do not expose them publicly in your codebase or repositories.

## Deployment

To deploy your chat app, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Replace `'YOUR_CHAT_ENGINE_PROJECT_ID'` with your Chat Engine project ID in the `App.js` file.
4. Implement the backend server with an authentication endpoint as explained earlier.
5. Create a production build of the app using `npm run build`.
6. Deploy the contents of the `build` folder to your preferred hosting platform (e.g., Netlify, Vercel, or GitHub Pages).

## Contributing

Contributions to the project are welcome. Feel free to open issues or submit pull requests for bug fixes, improvements, or new features.



## Acknowledgments

- The chat app is built using the [React Chat Engine](https://chatengine.io/) library.
- Special thanks to the creators and maintainers of the open-source libraries used in this project.
