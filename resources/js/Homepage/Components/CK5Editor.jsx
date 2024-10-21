import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Ck5Editor = ({ name, defaultValue = '', onChange }) => {

    const [editorData, setEditorData] = useState();

    useEffect(() => {

        setEditorData(defaultValue)

    }, [defaultValue])

    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                    const data = editor.getData();
                 
                    setEditorData(data);
                    onChange(data)
                }}
            />
            <textarea
                hidden
                name={name}
                value={editorData}
                id=""
                cols="30"
                rows="10"
            ></textarea>
        </div>
    );
};

export default Ck5Editor;
