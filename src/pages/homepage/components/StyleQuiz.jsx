import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What\'s your ideal way to spend a weekend at home?",
      options: [
        { id: 'a', text: "Hosting an elegant dinner party", style: "classic", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { id: 'b', text: "Relaxing with a book and coffee", style: "modern", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=80" },
        { id: 'c', text: "Working on creative projects", style: "eclectic", image: "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_640.jpg" },
        { id: 'd', text: "Enjoying nature from indoors", style: "rustic", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&q=80" }
      ]
    },
    {
      id: 2,
      question: "Which color palette speaks to you most?",
      options: [
        { id: 'a', text: "Rich jewel tones with gold accents", style: "classic", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { id: 'b', text: "Clean whites and soft grays", style: "modern", image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&q=80" },
        { id: 'c', text: "Bold colors with unexpected combinations", style: "eclectic", image: "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_640.jpg" },
        { id: 'd', text: "Warm earth tones and natural hues", style: "rustic", image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400&q=80" }
      ]
    },
    {
      id: 3,
      question: "What\'s your approach to furniture selection?",
      options: [
        { id: 'a', text: "Timeless pieces with rich history", style: "classic", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { id: 'b', text: "Sleek, functional, and minimal", style: "modern", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=80" },
        { id: 'c', text: "Mix of vintage finds and modern pieces", style: "eclectic", image: "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_640.jpg" },
        { id: 'd', text: "Natural materials and handcrafted items", style: "rustic", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&q=80" }
      ]
    }
  ];

  const styleResults = {
    classic: {
      title: "Classic Elegance",
      description: "You appreciate timeless beauty, rich textures, and sophisticated details. Your ideal space combines traditional elements with luxurious comfort.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Rich fabrics and textures", "Antique and vintage pieces", "Warm, inviting color schemes", "Elegant lighting fixtures"],
      color: "bg-warm-gold"
    },
    modern: {
      title: "Modern Minimalism",
      description: "You love clean lines, open spaces, and functional design. Your perfect home is uncluttered, serene, and effortlessly stylish.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      features: ["Clean, geometric lines", "Neutral color palettes", "Multi-functional furniture", "Abundant natural light"],
      color: "bg-deep-sage"
    },
    eclectic: {
      title: "Eclectic Expression",
      description: "You\'re drawn to unique pieces and creative combinations. Your space tells a story through diverse elements that somehow work perfectly together.",
      image: "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg",
      features: ["Mix of patterns and textures", "Unique art and accessories", "Bold color combinations", "Conversation-starting pieces"],
      color: "bg-accent"
    },
    rustic: {
      title: "Rustic Charm",
      description: "You find beauty in natural materials and cozy atmospheres. Your ideal space feels like a warm embrace with organic textures and earthy tones.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      features: ["Natural wood and stone", "Cozy textiles and throws", "Warm, earthy color schemes", "Handcrafted details"],
      color: "bg-forest-green"
    }
  };

  const handleAnswer = (questionId, optionId, style) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { optionId, style }
    }));

    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate results
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }
  };

  const getResultStyle = () => {
    const styles = Object.values(answers)?.map(answer => answer?.style);
    const styleCounts = styles?.reduce((acc, style) => {
      acc[style] = (acc?.[style] || 0) + 1;
      return acc;
    }, {});
    
    return Object.keys(styleCounts)?.reduce((a, b) => 
      styleCounts?.[a] > styleCounts?.[b] ? a : b
    );
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-br from-sanctuary-white to-sanctuary-gray">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quiz Introduction */}
            <div className="mb-12">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  Discover Your Style
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-8 leading-tight">
                What's Your 
                <span className="text-accent"> Design DNA?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Take our personalized style quiz to discover your unique design preferences 
                and get tailored recommendations for your perfect sanctuary.
              </p>
            </div>

            {/* Quiz Preview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {Object.entries(styleResults)?.map(([key, style]) => (
                <div key={key} className="group relative overflow-hidden rounded-xl">
                  <div className="aspect-square">
                    <Image
                      src={style?.image}
                      alt={style?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-playfair font-semibold text-lg mb-1">
                        {style?.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiz Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "Palette",
                  title: "Personalized Results",
                  description: "Get style recommendations tailored specifically to your preferences"
                },
                {
                  icon: "Clock",
                  title: "Quick & Fun",
                  description: "Just 3 minutes to discover your design personality"
                },
                {
                  icon: "Gift",
                  title: "Free Consultation",
                  description: "Receive a complimentary 15-minute style consultation"
                }
              ]?.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit?.icon} size={28} color="white" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-primary mb-2">
                    {benefit?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit?.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Start Quiz Button */}
            <Button
              onClick={startQuiz}
              variant="default"
              className="bg-forest-green hover:bg-forest-green/90 text-white px-8 py-4 text-lg"
              iconName="Play"
              iconPosition="left"
            >
              Start Style Quiz
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const resultStyle = getResultStyle();
    const result = styleResults?.[resultStyle];

    return (
      <section className="py-20 lg:py-32 bg-gradient-to-br from-sanctuary-white to-sanctuary-gray">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">
                  Your Style Result
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4">
                {result?.title}
              </h2>
            </div>

            {/* Result Details */}
            <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                  <Image
                    src={result?.image}
                    alt={result?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8 lg:p-12">
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {result?.description}
                  </p>

                  <h3 className="text-xl font-playfair font-semibold text-primary mb-6">
                    Your Style Features:
                  </h3>

                  <div className="space-y-3 mb-8">
                    {result?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="Check" size={18} className="text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="flex-1">
                      <Button
                        variant="default"
                        fullWidth
                        className="bg-forest-green hover:bg-forest-green/90 text-white"
                        iconName="Calendar"
                        iconPosition="left"
                      >
                        Book Free Consultation
                      </Button>
                    </Link>
                    
                    <Button
                      onClick={resetQuiz}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-center bg-sanctuary-gray rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                Ready to bring your style to life?
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                Let's schedule a complimentary consultation to discuss how we can transform 
                your space to perfectly match your {result?.title?.toLowerCase()} style.
              </p>

              <Link to="/portfolio">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View {result?.title} Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question = questions?.[currentQuestion];
  const progress = ((currentQuestion + 1) / questions?.length) * 100;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-sanctuary-white to-sanctuary-gray">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {questions?.length}
              </span>
              <span className="text-sm font-medium text-accent">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
              {question?.question}
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the option that resonates most with you
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {question?.options?.map((option) => (
              <button
                key={option?.id}
                onClick={() => handleAnswer(question?.id, option?.id, option?.style)}
                className="group relative bg-white rounded-2xl shadow-sanctuary-md overflow-hidden sanctuary-transition hover:shadow-sanctuary-lg hover:-translate-y-1 text-left"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={option?.image}
                    alt={option?.text}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg font-medium leading-relaxed">
                    {option?.text}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ArrowRight" size={16} color="white" />
                </div>
              </button>
            ))}
          </div>

          {/* Quiz Navigation */}
          <div className="flex justify-center mt-12">
            <Button
              onClick={resetQuiz}
              variant="ghost"
              className="text-muted-foreground hover:text-primary"
              iconName="X"
              iconPosition="left"
            >
              Exit Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleQuiz;