import React from 'react'

interface SectionProps {
    sectionHeading?: string;
    children: React.ReactNode;
    id?: string;
}

const MainPageSection = (props: SectionProps) => {
    return (
        <>
            <section className="text-center pt-5" id={props.id}>
                <h1 className="pt-3" id={`${props.id}-heading`}>{props.sectionHeading}</h1>
                <div className="container">
                    <div className="row g-4 py-4">
                        {props.children}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPageSection