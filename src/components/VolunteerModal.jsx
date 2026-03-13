import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { CheckCircle, X } from 'lucide-react';

const VolunteerModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
    isBeliever: '',
    yearsAsBeliever: '',
    joinVolunteers: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'volunteers'), {
        ...formData,
        submittedAt: serverTimestamp()
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting volunteer form:", error);
      alert(t('volunteer.error'));
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    if (submitted) {
      return (
        <div className="success-message">
          <div className="success-icon">
            <CheckCircle size={40} />
          </div>
          <h2>{t('volunteer.thanks')}</h2>
          <p>{t('volunteer.success')}</p>
          <button className="btn-primary" style={{marginTop: '20px', width: '100%'}} onClick={onClose}>
            {t('volunteer.close')}
          </button>
        </div>
      );
    }

    switch(step) {
      case 1:
        return (
          <div className="form-step">
            <h3 className="mb-20">{t('volunteer.title')}</h3>
            <div className="form-group">
              <label>{t('volunteer.first_name')}</label>
              <input 
                type="text" className="form-control" required
                value={formData.firstName}
                onChange={e => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>{t('volunteer.last_name')}</label>
              <input 
                type="text" className="form-control" required
                value={formData.lastName}
                onChange={e => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
            <div className="flex gap-20">
              <div className="form-group" style={{flex: 1}}>
                <label>{t('volunteer.age')}</label>
                <input 
                  type="number" className="form-control" required
                  value={formData.age}
                  onChange={e => setFormData({...formData, age: e.target.value})}
                />
              </div>
              <div className="form-group" style={{flex: 2}}>
                <label>{t('volunteer.phone')}</label>
                <input 
                  type="tel" className="form-control" required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <button 
              className="btn-accent" style={{width: '100%', marginTop: '20px'}}
              onClick={() => step1Valid() && setStep(2)}
            >
              {t('volunteer.next')}
            </button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h3 className="mb-20">{t('volunteer.contact_info')}</h3>
            <div className="form-group">
              <label>{t('volunteer.email')}</label>
              <input 
                type="email" className="form-control" required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>{t('volunteer.is_believer')}</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" name="isBeliever" value="yes" 
                    checked={formData.isBeliever === 'yes'}
                    onChange={e => setFormData({...formData, isBeliever: 'yes'})}
                  /> {t('volunteer.yes')}
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" name="isBeliever" value="no" 
                    checked={formData.isBeliever === 'no'}
                    onChange={e => setFormData({...formData, isBeliever: 'no'})}
                  /> {t('volunteer.no')}
                </label>
              </div>
            </div>
            
            {formData.isBeliever === 'yes' && (
              <div className="form-step">
                <div className="form-group mt-20">
                  <label>{t('volunteer.how_many_years')}</label>
                  <input 
                    type="number" className="form-control" 
                    value={formData.yearsAsBeliever}
                    onChange={e => setFormData({...formData, yearsAsBeliever: e.target.value})}
                  />
                </div>
              </div>
            )}

            {formData.isBeliever === 'no' && (
              <div className="form-step">
                <div className="form-group mt-20">
                  <label>{t('volunteer.join_volunteers')}</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input 
                        type="radio" name="joinVolunteers" value="yes" 
                        onChange={() => setFormData({...formData, joinVolunteers: 'yes'})}
                      /> {t('volunteer.yes')}
                    </label>
                    <label className="radio-option">
                      <input 
                        type="radio" name="joinVolunteers" value="no" 
                        onChange={() => setFormData({...formData, joinVolunteers: 'no'})}
                      /> {t('volunteer.no')}
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-20" style={{marginTop: '30px'}}>
              <button className="btn-outline" style={{flex: 1}} onClick={() => setStep(1)}>{t('volunteer.back')}</button>
              <button 
                className="btn-accent" style={{flex: 2}} 
                onClick={handleSubmit}
                disabled={loading || !formData.email || !formData.isBeliever}
              >
                {loading ? t('volunteer.sending') : t('volunteer.finish')}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const step1Valid = () => {
    if (!formData.firstName || !formData.lastName || !formData.age || !formData.phone) {
      alert(t('volunteer.complete_fields'));
      return false;
    }
    return true;
  };

  return (
    <div className="modal-overlay">
      <div className="auth-modal" style={{maxWidth: '500px'}}>
        <span className="close-modal" onClick={onClose}><X size={24} /></span>
        <div className="step-indicator">
          <div className={`step-dot ${step === 1 ? 'active' : ''}`}></div>
          <div className={`step-dot ${step === 2 ? 'active' : ''}`}></div>
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default VolunteerModal;
