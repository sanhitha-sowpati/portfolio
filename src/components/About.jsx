import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About(){
    const [titleRef, isTitleVisible] = useIntersectionObserver();
    const [descriptionRef, isDescriptionVisible] = useIntersectionObserver();
    const [skillsRef, isSkillsVisible] = useIntersectionObserver();

    return (
        <section id="About" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20" style={{
            background: 'rgba(248, 232, 240, 0.8)'
        }}>
            <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
                <h1 
                    ref={titleRef}
                    className="text-7xl font-bold mb-8" 
                    style={{
                        fontFamily: 'Story Script, cursive', 
                        color: 'gray',
                        fontSize:'3rem',
                        opacity: isTitleVisible ? 1 : 0,
                        transform: isTitleVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                    }}
                >
                    About Me
                </h1>
                <p 
                    ref={descriptionRef}
                    className="text-2xl mb-16 leading-relaxed text-center max-w-4xl mx-8 px-4 border-l-4 border-r-4 border-gray-300" 
                    style={{
                        fontFamily: 'Fredoka, cursive', 
                        background: 'linear-gradient(45deg, #1f2937, #6b7280, #9ca3af)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent', 
                        backgroundClip: 'text',
                        fontSize:'1.5rem',
                        marginRight:'4rem',marginLeft:'4rem',marginTop:'2rem',marginBottom:'3rem',
                        opacity: isDescriptionVisible ? 1 : 0,
                        transform: isDescriptionVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
                    }}
                >
                    I specialize in building dynamic full stack web applications with a strong focus on 
                    integrating Artificial Intelligence to create smarter, more responsive systems. My passion
                    lies in bridging the gap between software and hardware—whether it's developing real-time 
                    dashboards for sensor networks or embedding predictive models into user-facing platforms.   
                </p>
                <div 
                    ref={skillsRef}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                    style={{
                        opacity: isSkillsVisible ? 1 : 0,
                        transform: isSkillsVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
                    }}
                >
                    <h2 className="text-3xl font-bold mb-12" style={{fontFamily: 'Story Script, cursive', color: 'black',fontSize:'2rem'}}>Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4 px-8 py-6">
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" style={{fontFamily: 'Fredoka, cursive',padding:'2rem'}}>Java</div>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" style={{fontFamily: 'Fredoka, cursive',padding:'2rem'}}>HTML</div>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" style={{fontFamily: 'Fredoka, cursive',padding:'2rem'}}>CSS</div>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" style={{fontFamily: 'Fredoka, cursive',padding:'2rem'}}>JavaScript</div>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" style={{fontFamily: 'Fredoka, cursive',padding:'2rem'}}>React</div>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" style={{fontFamily: 'Fredoka, cursive',padding:'2rem'}}>Tailwind CSS</div>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" style={{fontFamily: 'Fredoka, cursive',padding:'2rem'}}>Python</div>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" style={{fontFamily: 'Fredoka, cursive',padding:'2rem'}}>C</div>
                    </div>
                </div>
            </div>
        </section>
    )
}