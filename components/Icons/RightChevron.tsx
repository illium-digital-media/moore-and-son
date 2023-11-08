const RightChevron = () => {
    return (
    //     width: clamp(1.5rem, 2.9vw, 1.75rem);
    // height: clamp(1.5rem, 2.9vw, 1.75rem);
        <div className='bg-primary rounded-full h-[clamp(1.5rem, 2.9vw, 1.75rem)] w-[clamp(1.5rem, 2.9vw, 1.75rem)] flex justify-center items-center p-1'>
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 6.35 6.35">
                <g>
                    <path d="M2.258 1.315a.265.265 0 0 0-.174.469L3.703 3.17l-1.62 1.386a.265.265 0 1 0 .345.4L4.28 3.373a.265.265 0 0 0 0-.403L2.428 1.382a.265.265 0 0 0-.17-.067z" fill="#ffffff" data-original="#000000" />
                </g>
            </svg>
        </div>
    )
}

export default RightChevron;