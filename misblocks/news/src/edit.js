import {useBlockProps} from "@wordpress/block-editor";
import apiFetch from "@wordpress/api-fetch";
import {useState, useEffect} from "@wordpress/element"; //libreria para acceder a las funcionalidades de react

const Edit = (props) => {
  const blockProps = useBlockProps();
	const [post, setPosts] = useState([]);

	const fetchPosts = async() => {
		let path = "/wp/v2/post";
		const newPosts = await apiFetch({path});
		setPosts(newPosts);
	}

	

  return (
    <p {...blockProps}>Hola</p>
  );
};

export default Edit;