import{useState} from "@wordpress/element";
import {BlockControls, InspectorControls, RichText} from '@wordpress/block-editor';
import {Panel, PanelBody, TextControl} from "@wordpress/components";

const Edit = (props) =>{
	const { className, attributes, setAttributes } = props;
	const{title, nameLabel, text} = attributes;
	const[hasText, setHasText] = useState(text);

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title="labels" initialOpen={true}>
						<TextControl 
							label="Name label"
							value={nameLabel}
							onChange={(newLabel) => setAttributes({nameLabel: newLabel })}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<BlockControls
				controls={[
					{
						icon: "text",
						tittle: "Agregar texto",
						isActive: text || hasText, 
						onClick: () => setHasText(!hasText)
					}
				]}
			/>
			<div className={className}>
				<div className="list-icon">
					<div className="list-icon__content">

							<div className="list-icon__content__left">
								<img className="list-icon__icon-imagen" src="https://image.shutterstock.com/image-vector/vector-black-icon-milfs-260nw-2119214723.jpg"/>
							</div>

							<div className="list-icon__content__right">
								<RichText
									tagName="h4"
									placeholder="Agregar text"
									className="list-icon__title-description"
									value={title}
									onChange={(newTitle) => setAttributes({ title: newTitle })}
								/>
								{ ( text || hasText ) && 
									<RichText
										tagName="p"
										placeholder="Escribir un parrafo"
										className="list-icon__title-parrafo"
										value={text}
										onChange={(newtext) => setAttributes({ text: newtext })}
									/>
								}
							</div>

					</div>
				</div>
			</div>
		</>
	);
}

export default Edit;