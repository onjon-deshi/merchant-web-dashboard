import React, {useState, useRef} from "react";
import "./style.css";
import PdfGrid from "./ImageGrid";
import FileUploadIcon from "./../../assets/icons/UploadFileIcon.png"
import { maxHeight } from "@mui/system";



// drag drop file component
function DragDropFile() {

    const [pdf, setPdf] = useState([]);

    // drag state
    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef(null);
    

    function handleFile(files) {
        var index = files.length-1;

        if(files[index]["type"] !== "application/pdf") {
            alert("Invalid File Type. Please upload PDF only");
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            setPdf((prevState) => [
                // ...prevState,
                { id: 0, src: e.target.result }
            ]);
        };

        reader.readAsDataURL(files[index]); 
        return files[index]; 
    }

    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    };


    // triggers when file is selected with click
    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
        }
    };


    return (
        <div className="block">
            <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input ref={inputRef} type="file" id="input-file-upload" multiple={false} onChange={handleChange} />
                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                    <div>
                        <img src={FileUploadIcon} alt="Upload NID" style={{maxHeight:"100px", display: "block", margin: "0 auto 20px"}} />
                        <p>Drag & Drop Owner’s NID Here</p>
                        or 
                        <p className="cursor-pointer hover:underline">Click Here</p>
                        <i className="text-sm pt-2 block">(File format should be .pdf)</i>
                    </div>
                </label>


                { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            </form>

            <PdfGrid images={pdf} />
        </div>
    );
};

export default DragDropFile;
