import React, { useState } from 'react';
import jetooLogo from '../assets/jetoo.png';
import { sendToGoogleSheets, prepareTestData } from '../utils/sheetsApi';
import './UserForm.css';

interface UserFormData {
  name: string;
  whatsapp: string;
  age: string;
}

interface UserFormProps {
  onSubmit: () => void;
  onBack: () => void;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  level: string;
}

const UserForm: React.FC<UserFormProps> = ({ 
  onSubmit, 
  onBack, 
  score, 
  correctAnswers, 
  totalQuestions, 
  level 
}) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    whatsapp: '',
    age: ''
  });

  const [errors, setErrors] = useState<Partial<UserFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<UserFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Атыңызды енгізіңіз';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp нөміріңізді енгізіңіз';
    } else if (!/^\+?[0-9\s\-\(\)]+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Дұрыс нөмір енгізіңіз';
    }

    if (!formData.age.trim()) {
      newErrors.age = 'Жасыңызды енгізіңіз';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 1 || Number(formData.age) > 120) {
      newErrors.age = 'Дұрыс жасты енгізіңіз';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const testData = prepareTestData(
          formData,
          score,
          correctAnswers,
          totalQuestions,
          level
        );

        const success = await sendToGoogleSheets(testData);
        
        if (success) {
          // Данные успешно отправлены
        } else {
          // Ошибка при отправке
        }
        // Meta Pixel tracking for form submit ("Бонусты аламын")
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'UserForm Bonus Button',
            content_category: 'Form',
            value: 1.00,
            currency: 'KZT'
          });
        }
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
      } finally {
        setIsSubmitting(false);
        onSubmit();
      }
    }
  };

  const handleInputChange = (field: keyof UserFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="user-form-screen">
      <div className="user-form-container">
        {/* Header */}
        <div className="form-header">
          <div className="logo">
            <img src={jetooLogo} alt="JETOO" className="logo-image" />
          </div>
          <button className="close-button" onClick={onBack}>
            ✕
          </button>
        </div>


        {/* Form */}
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Аты-жөніңіз"
              disabled={isSubmitting}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              className={`form-input ${errors.whatsapp ? 'error' : ''}`}
              value={formData.whatsapp}
              onChange={(e) => handleInputChange('whatsapp', e.target.value)}
              placeholder="Whatsapp номеріңіз"
              disabled={isSubmitting}
            />
            {errors.whatsapp && <span className="error-message">{errors.whatsapp}</span>}
          </div>

          <div className="form-group">
            <input
              type="number"
              className={`form-input ${errors.age ? 'error' : ''}`}
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              placeholder="Жасыңыз"
              min="1"
              max="120"
              disabled={isSubmitting}
            />
            {errors.age && <span className="error-message">{errors.age}</span>}
          </div>

          {/* Action Button */}
          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Жіберілуде...' : 'Нәтижені көру'}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="form-footer">
          JETOO ENGLISH LEVEL TEST
        </div>
      </div>
    </div>
  );
};

export default UserForm; 