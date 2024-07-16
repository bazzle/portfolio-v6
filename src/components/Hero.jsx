function Hero(){
    return(
        <div className="hero">
            <div className="container">
                <div className="hero__message">
                    <p className="hero__message__main">
                        My philosophy is <span className="highlight">Web for everyone.</span>
                    </p>
                    <p className="hero__message__sub">
                        ... But still <span className="highlight">look cool</span>.
                    </p>
                </div>
                <div className="hero__links">
                    <a href="mailto:barry@br-web.me">barry@br-web.me</a> &mdash;
                    <a href="https://www.linkedin.com/in/br-web/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;