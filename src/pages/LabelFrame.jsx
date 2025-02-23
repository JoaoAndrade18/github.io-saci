import React, { useState } from "react";
import axios from "axios";


function LabelFrame() {
    const [labels, setLabels] = useState([]);
    const [file, setFile] = useState(null);
    const [models, setModels] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleModelsChange = (event) => {
        const { value, checked } = event.target;
        setModels((prevModels) => 
            checked ? [...prevModels, value] : prevModels.filter((model) => model !== value)
        );
    };

    const imageSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", file);
        models.forEach(model => formData.append("models", model));	

        try {   
            const response = await axios.post("http://localhost:8000/frame/label", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setLabels(response.data);
        } catch (error) {
            console.error('[INFO] Error uploading file:', error);
        }
    };

    return (
        <div>
            <h1>Label Frame</h1>
            <form onSubmit={imageSubmit}>
                <input type="file" name="image" accept="image/*" required onChange={handleFileChange} />
                <br />

                <input className="selectModels" type="checkbox" name="models" value="clip" onChange={handleModelsChange} />
                <label htmlFor="clip">CLIP</label>
                <br />

                <input className="selectModels" type="checkbox" name="models" value="align" onChange={handleModelsChange} />
                <label htmlFor="align">Align</label>
                <br />
                
                <input className="selectModels" type="checkbox" name="models" value="siglip" onChange={handleModelsChange} />
                <label htmlFor="siglip">Siglip</label>
                <br />
                
                <button type="submit">Upload</button>
            </form>
            <div>
                <h2>Labels:</h2>
                <br />
                {labels.map((label, index) => (
                    <div key={index}>
                        <h3>{label}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LabelFrame;
