import { EditorContent, JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Json } from '../../supabase/supabase';
import "./ProductDescripction.css"

interface Props {
	content: JSONContent | Json;
}

export const ProductDescription = ({ content }: Props) => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: content as JSONContent,
		editable: false,
		editorProps: {
			attributes: {
				class: 'prose prose-sm sm:prose-base max-w-none',
			},
		},
	});

	return (
        <div className="product-description">
            <h2 className="description-title">Descripción</h2>
            <EditorContent editor={editor} />
        </div>
    );
    
};
