import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Hero() {
    const [greetingRef, isGreetingVisible] = useIntersectionObserver();
    const [nameRef, isNameVisible] = useIntersectionObserver();
    const [titleRef, isTitleVisible] = useIntersectionObserver();
    const [resumeRef, isResumeVisible] = useIntersectionObserver();

    return (
        <section id="Hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
            background: 'rgba(248, 232, 240, 0.8)'
        }}>
            <div className="hero-content relative z-10 text-left">
                <h1 
                    ref={greetingRef}
                    className="font-bold" 
                    style={{
                        fontFamily: 'Story Script, cursive', 
                        fontSize: '3rem', 
                        color: 'black',
                        opacity: isGreetingVisible ? 1 : 0,
                        transform: isGreetingVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                    }}
                >
                    Hello!!
                </h1>
                <h1 
                    ref={nameRef}
                    className="font-bold mb-6" 
                    style={{
                        fontFamily: 'Story Script, cursive', 
                        fontSize: '3rem', 
                        color: 'black', 
                        marginTop: '-0.5rem',
                        opacity: isNameVisible ? 1 : 0,
                        transform: isNameVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
                    }}
                >
                    I'm Sanhitha
                </h1>
                <p 
                    ref={titleRef}
                    className="mb-8" 
                    style={{
                        fontSize: '1.25rem', 
                        fontFamily: 'Fredoka, cursive', 
                        background: 'linear-gradient(45deg, #1f2937, #6b7280, #9ca3af)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent', 
                        backgroundClip: 'text',
                        opacity: isTitleVisible ? 1 : 0,
                        transform: isTitleVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
                    }}
                >
                    Computer Science Student | Web Developer | AI Developer
                </p>
                <p 
                    ref={resumeRef}
                    style={{
                        fontSize: '1rem', 
                        fontFamily: 'Fredoka, cursive', 
                        background: 'linear-gradient(45deg, #1f2937, #6b7280, #9ca3af)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent', 
                        backgroundClip: 'text',
                        opacity: isResumeVisible ? 1 : 0,
                        transform: isResumeVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out 0.9s, transform 0.8s ease-out 0.9s'
                    }}
                >
                    Check me <a href="google.com" className="text-pink-500 font-semibold hover-link" style={{display: 'inline-block'}}>Resume</a>
                </p>
                <style jsx>{`
                    .hover-link {
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }
                    .hover-link:hover {
                        transform: translateY(-2px) scale(1.05);
                    }
                `}</style>
            </div>
        </section>
    )
}
