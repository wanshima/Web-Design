import { useRef } from 'react';

function MainArea() {
    const dialogRef= useRef();
    const isOpenRef = useRef(false);
    
    return (
        <main className="main">
            <button onClick={() => {
                dialogRef.current.showModal();
                isOpenRef.current = true;
            }}>
                Open Modal
            </button>
            <dialog ref={dialogRef} onClose={ () => {
                isOpenRef.current = false;
            }}>
                Welcome to the modal.  
                <button type="button" onClick={() => {
                    dialogRef.current.close();
                }}>
                    Close Modal
                </button>
            </dialog>
        </main>
    );
}

export default MainArea;
    

