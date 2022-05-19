import {RichText} from '@wordpress/block-editor';

const save = (props) =>{
	const { className, attributes } = props;
	const{title, nameLabel, text} = attributes;

	return (
		<div className={className}>
			<div className="list-icon">
				<div className="list-icon__content">

						<div className="list-icon__content__left">
							<img className="list-icon__icon-imagen" src="https://image.shutterstock.com/image-vector/vector-black-icon-milfs-260nw-2119214723.jpg"/>
						</div>

						<div className="list-icon__content__right">
							<RichText.Content
								tagName="h4"
								className="list-icon__title-description"
								value={title}
							/>

							{ text  && 
								<RichText.Content
									tagName="p"
									className="list-icon__title-parrafo"
									value={text}
								/>
							}

						</div>

				</div>
			</div>
		</div>
	);
}

export default save;