import { FC, ReactNode, useState, useEffect, useRef } from "react";
import { useBrowserTypes } from "@/hooks";

interface ModalProps {
    isOpen: boolean
    children: ReactNode
    onClose: () => void
}
const Modal: FC<ModalProps> = ({ isOpen, children, onClose }) => {
    const [isSearchBarOpened, setIsSearchBarOpened] = useState<boolean>(false);
    const { isFirefox } = useBrowserTypes();

    // Prevent Body Scroll
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
            document.documentElement.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
            document.documentElement.classList.remove('modal-open');
        }
        
        return () => {
            document.body.classList.remove('modal-open');
            document.documentElement.classList.remove('modal-open');
        }
    }, [isOpen])

    // Detect if Search Bar is Opened
    useEffect(() => {
        let animationFrameId: number;
        const initialHeight = window.innerHeight;

        const handleResize = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                setIsSearchBarOpened(window.innerHeight <= initialHeight);
            });
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    // Press Escape Key to Close
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose])

    // Click Overlay to Close
    const overlayRef = useRef<HTMLDivElement>(null);
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    }

    if (isOpen) {
        return (
            <div ref={overlayRef} onClick={handleOverlayClick}  className={`fixed top-0 left-0 z-50 w-screen ${isFirefox ? "h-screen" : isSearchBarOpened ? 'modal-overlay-height' : 'h-screen'} bg-[#0000003C]`}>
                <div className="top-auto bottom-0 sm:top-1/2 sm:bottom-auto sm:left-1/2 absolute bg-white overflow-y-auto rounded-t-2xl sm:rounded-b-2xl p-6 w-full sm:w-11/12 sm:max-w-5xl max-h-[90%] sm:max-h-[calc(100vh-5em)] transform animate-slide-in-from-bottom sm:animate-fade-in sm:-translate-x-1/2 sm:-translate-y-1/2">
                    { children }
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Modal