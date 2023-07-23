import { FC, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

const CurriculumVitaeImage: FC = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [width, setWidth] = useState<number | undefined>(undefined);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    }

    const pdfPageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleResize = () => {
            const clientWidth = pdfPageRef.current ? pdfPageRef.current.clientWidth : undefined;
            if (clientWidth !== undefined) {
                setWidth(clientWidth);
            } else {
                setTimeout(handleResize, 100)
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div className="mt-10 relative bg-neutral-200">
            <Document
                file="https://assets.vincentsuryakim.com/VincentSuryakim_Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="flex justify-center items-center w-full h-full"><p className="text-neutral-700 font-semibold">Loading CV...</p></div>}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <div ref={pdfPageRef} className="w-full mt-2 overflow-hidden rounded-xl flex justify-center" key={`page_${index + 1}`}>
                        <Page
                            pageNumber={index + 1}
                            width={width}
                            className="rounded-xl overflow-hidden"
                            loading={<p>Rendering page {index + 1}...</p>}
                        />
                    </div>
                ))}
            </Document>
        </div>
    )
}

export default CurriculumVitaeImage;