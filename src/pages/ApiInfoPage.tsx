import MinimulNavbar from '../components/MinimulNavbar'

const ApiInfoPage = () => {
    return (
        <>
            <MinimulNavbar />
            <div className='container'>
                <div className="row">
                    <div className='col-3 d-flex flex-column border p-3 py-3 apiInfoPage-height' id='left-section'>
                        <div>
                            <small className='link' style={{ cursor: "pointer" }}> ⬅ Back to homepage</small>
                        </div>
                        <h5 className='pt-5'>On this page</h5>

                        <ul className='p-4 pt-3 d-grid gap-2 overflowY-auto'>
                            <li className='link-secondary' role='button'>this is it</li>
                            <li className='link-secondary' role='button'>this is it</li>
                            <li className='link-primary' role='button'>this is it</li>
                        </ul>

                        <div className="pt-3 d-grid mt-auto">
                            <button className='btn btn-primary'>Apply for access</button>
                        </div>
                    </div>

                    <div className='col border border-start-0 px-4 overflowY-auto apiInfoPage-height' id='right-section'>
                        <section className='pt-4'>
                            <h2>SUBASA Text to Speech - STT</h2>
                            <p>You can test subasa STT. Visit <a href="">stt.subasa.lk↗</a></p>
                        </section>
                        <section className='pt-4'>
                            <h3>Subasa STT API</h3>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                        </section>

                        <section className='pt-4'>
                            <h3>Subasa STT API</h3>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem rerum expedita? Voluptatibus voluptas, earum a et ab, maxime eos impedit cumque sit ea deserunt, harum ipsa! Exercitationem illum, hic soluta magni corrupti fuga eius quisquam dolorem optio laudantium quibusdam tempora asperiores architecto esse sequi reiciendis! Ipsa veritatis incidunt suscipit.</p>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ApiInfoPage
