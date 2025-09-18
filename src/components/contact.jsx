import locationPin from '../assets/location-pin.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [formRef, isFormVisible] = useIntersectionObserver();
  const [infoRef, isInfoVisible] = useIntersectionObserver();
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'rgba(248, 232, 240, 0.8)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 70%, rgba(90, 29, 50, 0.6) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(243, 232, 255, 0.8) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.4) 0%, transparent 50%)',
        }}
      ></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Story Script, cursive', color: 'gray',marginTop:'4rem',fontSize:'2.5rem' }}
          >
            Contact Me
          </h1>
          <p
            className="text-lg sm:text-xl mx-auto max-w-3xl px-4 border-l-4 border-r-4 border-gray-300"
            style={{
              fontFamily: 'Fredoka, cursive',
              background:
                'linear-gradient(45deg, #1f2937, #6b7280, #9ca3af)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let's work together to bring your ideas to life
          </p>
        </div>

        {/* Main Grid */}
        <div className="flex flex-row items-start justify-center gap-6">
          {/* Contact Info */}
          

          {/* Contact Form */}
          <div
            ref={formRef}
            className="w-5/12 transform transition-all duration-700 "
            style={{
              opacity: isFormVisible ? 1 : 0,
              transform: isFormVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
              width:'70%',height:'70%',
            }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
              <h2
                className="text-2xl sm:text-3xl font-bold mb-6 text-center"
                style={{ fontFamily: 'Story Script, cursive', color: 'gray' }}
              >
                Send Message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1" style={{ fontFamily: 'Fredoka, cursive', color: '#374151',textAlign: 'left'}}>
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-2 rounded-lg border-0 bg-white/30 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white/40 transition-all duration-300"
                      style={{ fontFamily: 'Fredoka, cursive',border:'1px solid #374151',color:'#374151',width:'95%',height:'20px',alignItems: 'left',alignSelf: 'left',borderRadius:'5px',marginBottom:'10px',marginTop:'10px'}}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1" style={{ fontFamily: 'Fredoka, cursive', color: '#374151',textAlign: 'left'}}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full px-4 py-2 rounded-lg border-0 bg-white/30 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white/40 transition-all duration-300"
                        style={{ fontFamily: 'Fredoka, cursive',border:'1px solid #374151',color:'#374151',width:'90%',height:'20px',alignItems: 'left',alignSelf: 'left',borderRadius:'5px',marginBottom:'10px',marginTop:'10px'}}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1" style={{ fontFamily: 'Fredoka, cursive', color: '#374151',textAlign: 'left'}}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 rounded-lg border-0 bg-white/30 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white/40 transition-all duration-300"
                    style={{ fontFamily: 'Fredoka, cursive' ,border:'1px solid #374151',color:'#374151',width:'98%',height:'20px',alignItems: 'left',alignSelf: 'left',borderRadius:'5px',marginBottom:'10px',marginTop:'10px'}}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1" style={{ fontFamily: 'Fredoka, cursive', color: '#374151',textAlign: 'left'}}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-4 py-2 rounded-lg border-0 bg-white/30 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white/40 transition-all duration-300"
                    style={{ fontFamily: 'Fredoka, cursive' ,border:'1px solid #374151',color:'#374151',width:'98%',height:'20px',alignItems: 'left',alignSelf: 'left',borderRadius:'5px',marginBottom:'10px',marginTop:'10px'}}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1" style={{ fontFamily: 'Fredoka, cursive', color: '#374151',textAlign: 'left'}}>
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2 rounded-lg border-0 bg-white/30 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white/40 transition-all duration-300 resize-none"
                    style={{ fontFamily: 'Fredoka, cursive' ,border:'1px solid #374151',color:'#374151',width:'98%',height:'80px',alignItems: 'left',alignSelf: 'left',borderRadius:'5px',marginBottom:'10px',marginTop:'10px'}}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  style={{ fontFamily: 'Fredoka, cursive' ,border:'1px solid #374151',color:'#374151',width:'40%',height:'40px',alignItems: 'left',alignSelf: 'left',borderRadius:'5px',marginBottom:'10px',border:'1px solid #374151'}}
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-6/12 space-y-6" style={{width:'100%'}}>
            <div
              ref={infoRef}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg transform transition-all duration-700 hover:translate-y-[-5px] hover:scale-105"
              style={{
                marginLeft: '1rem',padding:'2rem',width:'100%',
                opacity: isInfoVisible ? 1 : 0,
                transform: isInfoVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
              }}
            >
              <h2
                className="text-2xl sm:text-3xl font-bold mb-6 text-left ml-2"
                style={{ fontFamily: 'Story Script, cursive', color: 'gray' }}
              >
                Get In Touch
              </h2>
              <div className="flex flex-nowrap items-center justify-between gap-8 w-full">
                {/* Email */}
                <div className="flex items-center space-x-4" style={{width:'30%'}}>
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: 'Fredoka, cursive' , textAlign: 'left'}}>
                     ✉ Email
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Fredoka, cursive'}}>
                      sowpatisanhitha@gmail.com
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-center space-x-4" style={{width:'30%'}}>
                  <div>
                      <h3 className="font-bold mb-1" style={{ fontFamily: 'Fredoka, cursive' , textAlign: 'left'}}>
                       ☎︎ Phone
                      </h3>
                      <p className="text-gray-600" style={{ fontFamily: 'Fredoka, cursive'}}>
                        +91 8333952399
                      </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center space-x-4" style={{width:'30%'}}>
                  <div>
                    <h3 className="font-bold mb-1" style={{ fontFamily: 'Fredoka, cursive' , textAlign: 'left'}}>
                      <img src={locationPin} alt="Location" style={{width:'20px',height:'20px', display:'inline-block', verticalAlign:'middle', marginRight:'8px'}}/>
                       Location
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Fredoka, cursive'}}>
                      Amaravati, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          </div>
          
        </div>
        <div style={{width:'100%',height:'150px',backgroundColor:'white'}}>
        <img src={github} alt="Location" style={{width:'20px',height:'20px', display:'inline-block', verticalAlign:'middle', marginRight:'20px',marginTop: '50px'}}/>
        <img src={linkedin} alt="Location" style={{width:'20px',height:'20px', display:'inline-block', verticalAlign:'middle', marginRight:'20px',marginTop: '50px'}}/>
        <img src={instagram} alt="Location" style={{width:'20px',height:'20px', display:'inline-block', verticalAlign:'middle', marginRight:'20px',marginTop: '50px'}}/>
        <img src={twitter} alt="Location" style={{width:'20px',height:'20px', display:'inline-block', verticalAlign:'middle', marginRight:'20px',marginTop: '50px'}}/>
        <img src={facebook} alt="Location" style={{width:'20px',height:'20px', display:'inline-block', verticalAlign:'middle', marginRight:'20px',marginTop: '50px'}}/>
        <p>© 2025 Sanhitha Sowpati. All rights reserved</p>
        </div>
        
      </div>

    </section>
  );
}


