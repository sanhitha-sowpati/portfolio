import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Education(){
    const [titleRef, isTitleVisible] = useIntersectionObserver();
    const [schoolRef, isSchoolVisible] = useIntersectionObserver();
    const [universityRef, isUniversityVisible] = useIntersectionObserver();

    return(
        <section id="Education" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20" style={{
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
                    Education
                </h1>
                
                <div 
                    ref={schoolRef}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 transform transition-all duration-1000 ease-out hover:translate-y-[-10px] hover:scale-105" 
                    style={{
                        opacity: isSchoolVisible ? 1 : 0,
                        transform: isSchoolVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                    }}
                >
                    <h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'Story Script, cursive', color: 'gray',fontSize:'2rem'}}>School</h2>
                    <div className="space-y-4" style={{justifyContent:'left',alignContent:'left'}}>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" 
                             style={{fontFamily: 'Fredoka, cursive', fontSize: '1.2rem'}}>
                            <strong>1-10th Grade:</strong> St. Ignatius School, Guntur
                        </div>
                        <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" 
                             style={{fontFamily: 'Fredoka, cursive', fontSize: '1.2rem'}}>
                            <strong>Intermediate (11th-12th):</strong> SR Junior College, Guntur
                        </div>
                    </div>
                </div>

                <div 
                    ref={universityRef}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform transition-all duration-1000 ease-out hover:translate-y-[-10px] hover:scale-105" 
                    style={{
                        opacity: isUniversityVisible ? 1 : 0,
                        transform: isUniversityVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
                    }}
                >
                    <h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'Story Script, cursive', color: 'gray',fontSize:'2rem'}}>University</h2>
                    <div className="bg-white/30 rounded-lg p-4 hover:bg-white/40 transition-all duration-300 hover:transform hover:scale-105" 
                         style={{fontFamily: 'Fredoka, cursive', fontSize: '1.2rem'}}>
                        <strong>VIT AP University</strong><br/>
                        Amaravati, Andhra Pradesh<br/>
                        <em>Expected Graduation: 2028</em>
                    </div>
        </div>
        </div>

        </section>
    )
}