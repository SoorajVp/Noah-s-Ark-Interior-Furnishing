import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What\'s your ideal weekend morning?",
      options: [
        {
          id: 'a',
          text: 'Reading in a cozy nook with natural light',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
          style: 'traditional'
        },
        {
          id: 'b',
          text: 'Minimalist coffee ritual in a clean space',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
          style: 'modern'
        },
        {
          id: 'c',
          text: 'Artistic breakfast surrounded by plants',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
          style: 'eclectic'
        }
      ]
    },
    {
      id: 2,
      question: "Which color palette speaks to you?",
      options: [
        {
          id: 'a',
          text: 'Warm neutrals with rich wood tones',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
          style: 'traditional'
        },
        {
          id: 'b',
          text: 'Crisp whites with bold accent colors',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
          style: 'modern'
        },
        {
          id: 'c',
          text: 'Jewel tones with metallic accents',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
          style: 'eclectic'
        }
      ]
    },
    {
      id: 3,
      question: "Your dream living room has:",
      options: [
        {
          id: 'a',
          text: 'Comfortable seating with family heirlooms',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
          style: 'traditional'
        },
        {
          id: 'b',
          text: 'Sleek furniture with clean lines',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
          style: 'modern'
        },
        {
          id: 'c',
          text: 'Mix of vintage and contemporary pieces',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
          style: 'eclectic'
        }
      ]
    }
  ];

  const styleResults = {
    traditional: {
      title: 'Classic Elegance',
      description: 'You appreciate timeless beauty, comfort, and pieces with history. Your ideal space combines traditional craftsmanship with modern functionality.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      characteristics: ['Warm color palettes', 'Quality materials', 'Comfortable seating', 'Personal collections']
    },
    modern: {
      title: 'Contemporary Minimalist',
      description: 'You love clean lines, open spaces, and functional design. Your perfect home is uncluttered, sophisticated, and effortlessly stylish.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      characteristics: ['Clean lines', 'Neutral colors', 'Functional furniture', 'Open layouts']
    },
    eclectic: {
      title: 'Artistic Bohemian',
      description: 'You embrace creativity, color, and unique pieces that tell a story. Your space is a curated collection of travels, art, and personal expression.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      characteristics: ['Bold patterns', 'Mixed textures', 'Unique artwork', 'Global influences']
    }
  };

  const handleAnswer = (optionId, style) => {
    const newAnswers = { ...answers, [currentQuestion]: { optionId, style } };
    setAnswers(newAnswers);

    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const styleCount = {};
    Object.values(finalAnswers)?.forEach(answer => {
      styleCount[answer.style] = (styleCount?.[answer?.style] || 0) + 1;
    });

    const dominantStyle = Object.keys(styleCount)?.reduce((a, b) => 
      styleCount?.[a] > styleCount?.[b] ? a : b
    );

    setQuizResult(styleResults?.[dominantStyle]);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizResult(null);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResults && quizResult) {
    return (
      <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={quizResult?.image}
            alt={quizResult?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-playfair font-semibold mb-2">
              Your Style: {quizResult?.title}
            </h3>
          </div>
        </div>
        <div className="p-8">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {quizResult?.description}
          </p>

          <div className="mb-8">
            <h4 className="font-playfair font-semibold text-lg mb-4">Key Characteristics:</h4>
            <div className="grid grid-cols-2 gap-3">
              {quizResult?.characteristics?.map((characteristic, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span className="text-sm text-foreground">{characteristic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              className="bg-forest-green hover:bg-forest-green/90 text-white flex-1"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              onClick={resetQuiz}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-playfair font-semibold">Discover Your Style</h3>
          <div className="flex items-center space-x-2">
            {currentQuestion > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={goBack}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Back
              </Button>
            )}
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {questions?.length}
            </span>
          </div>
        </div>

        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions?.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="p-8">
        <h4 className="text-lg font-playfair font-medium mb-6 text-center">
          {questions?.[currentQuestion]?.question}
        </h4>

        <div className="grid gap-4">
          {questions?.[currentQuestion]?.options?.map((option) => (
            <button
              key={option?.id}
              onClick={() => handleAnswer(option?.id, option?.style)}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-accent transition-all duration-300 sanctuary-hover"
            >
              <div className="flex items-center p-4">
                <div className="relative w-20 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src={option?.image}
                    alt={option?.text}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-inter font-medium text-foreground group-hover:text-accent transition-colors">
                    {option?.text}
                  </p>
                </div>
                <Icon 
                  name="ChevronRight" 
                  size={20} 
                  className="text-muted-foreground group-hover:text-accent transition-colors" 
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleQuiz;