import { useState } from "react";

const Accordion = ({ data }) => {
    return (
        <div className="accordion p-5">
            {data.map(({ header, body }) => (
                <AccordionItem header={header} body={body} />
            ))}
        </div>
    )
}


const AccordionItem = ({ header, body }) => {
    const [show, setShow] = useState(false);
    return (<div className="accordion-item">
        <div onClick={() => setShow(!show)} className="accordion-header flex justify-between p-5 border text-3xl text-gray-500 select-none rounded-lg cursor-pointer hover:bg-gray-100">
            <span>{header}</span>
            {/* <span className=""> {show ? "˅" : "˄"} </span> */}
            <span> {show ? "▽" : "△"} </span>
        </div>

        {
            show ? (
                <p className="accordion-body p-5 border text-2xl text-gray-400 rounded-lg leading-relaxed">
                    {body}
                </p>
            ) : ""
        }

    </div>)
}

export default Accordion