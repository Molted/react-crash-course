import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost, { action as newPostAction } from "./routes/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import PostDetails, {
	loader as postDetailsLoader,
} from "./routes/PostDetails.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Posts />,
				loader: postsLoader,
				children: [
					{ path: "create-post", element: <NewPost />, action: newPostAction },
					{ path: ":id", element: <PostDetails />, loader: postDetailsLoader },
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
