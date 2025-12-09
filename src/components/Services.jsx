import React, { useState } from 'react';

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    // Mock data for services - replace these with your actual image imports
    const services = [
        {
            id: 1,
            icon: "🔄", // Replace with Ayurvedic_icon
            title: "Online ayurvedic consultation",
            description: "(video/audio both)"
        },
        {
            id: 2,
            icon: "📋", // Replace with planning_icon
            title: "Follow ups and treatment planning",
            description: ""
        },
        {
            id: 3,
            icon: "🥗", // Replace with Lifestyle_icon
            title: "Personalized ayurvedic diet",
            description: "and lifestyle plans"
        },
        {
            id: 4,
            icon: "⚖️", // Replace with prakrtiti_icon
            title: "Prakriti analysis",
            description: "(body constitution assessment)"
        },
        {
            id: 5,
            icon: "🛡️", // Replace with Prevention_icon
            title: "Preventive and wellness guidance",
            description: ""
        },
        {
            id: 6,
            icon: "🧘", // Replace with Wellness_icon
            title: "Wellness sessions online",
            description: ""
        }
    ];

    return (
        <div className="py-16 px-4 max-w-6xl mx-auto bg-gradient-to-b from-sky-50 to-white min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-sky-800 mb-4">
                    My Services
                </h1>
                <p className="text-lg text-sky-600 max-w-2xl mx-auto leading-relaxed">
                    Personalized Ayurvedic care, guiding you towards a healthier body, a peaceful mind, and a balanced life.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
                {services.map((service) => (
                    <div 
                        key={service.id}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`
                            flex items-center gap-4 p-6 rounded-2xl border shadow-lg cursor-pointer
                            transform transition-all duration-300 ease-out
                            ${hoveredCard === service.id 
                                ? 'bg-sky-50 border-sky-200 shadow-2xl -translate-y-2 scale-102' 
                                : 'bg-white border-sky-100 shadow-lg translate-y-0 scale-100'
                            }
                        `}
                        style={{
                            transform: hoveredCard === service.id 
                                ? 'translateY(-8px) scale(1.02)' 
                                : 'translateY(0px) scale(1)',
                            boxShadow: hoveredCard === service.id 
                                ? '0 20px 40px -12px rgba(14, 165, 233, 0.15)' 
                                : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div 
                            className={`
                                w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0
                                transform transition-all duration-300 ease-out
                                ${hoveredCard === service.id 
                                    ? 'bg-gradient-to-br from-sky-400 to-sky-500 scale-110 shadow-xl' 
                                    : 'bg-gradient-to-br from-sky-300 to-sky-400 scale-100 shadow-lg'
                                }
                            `}
                        >
                            <span 
                                className={`
                                    text-2xl text-white transform transition-all duration-200
                                    ${hoveredCard === service.id ? 'scale-105' : 'scale-100'}
                                `}
                            >
                                {service.icon}
                            </span>
                            {/* Replace the span above with your actual images:
                            <img 
                                src={service.icon} 
                                alt={service.title} 
                                className={`
                                    w-8 h-8 object-contain brightness-0 invert
                                    transform transition-all duration-200
                                    ${hoveredCard === service.id ? 'scale-110' : 'scale-100'}
                                `}
                            />
                            */}
                        </div>
                        
                        <div className="flex-1 text-left">
                            <h3 
                                className={`
                                    text-lg font-semibold mb-1 leading-tight
                                    transform transition-all duration-200 ease-out
                                    ${hoveredCard === service.id 
                                        ? 'text-sky-700 scale-102' 
                                        : 'text-sky-800 scale-100'
                                    }
                                `}
                            >
                                {service.title}
                            </h3>
                            {service.description && (
                                <p className={`
                                    text-sm opacity-80 transition-all duration-200
                                    ${hoveredCard === service.id ? 'text-sky-600' : 'text-sky-500'}
                                `}>
                                    {service.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;