function Background({bgSection}) {
    return (
        <section>
            <img 
            src={`${bgSection}`}
            alt="background" 
            className="w-full h-80 object-cover aspect-video mt-3" 
            />
        </section>
    );
}

export default Background();