import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { useTranslation } from 'react-i18next';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut 
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (authMode === 'login') {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name: formData.name,
          email: formData.email,
          role: 'User',
          createdAt: serverTimestamp()
        });
      }
      setShowAuth(false);
      setFormData({ email: '', password: '', name: '' });
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          name: result.user.displayName,
          email: result.user.email,
          role: 'User',
          createdAt: serverTimestamp()
        });
      }
      setShowAuth(false);
    } catch (error) {
      alert("Error con Google: " + error.message);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container flex align-center justify-between">
          <div className="logo">
            <Link to="/">
              <img src="/images/fondo blanco.png" alt="Maranatha Logo" className="logo-img" />
            </Link>
          </div>
          
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</Link>
            <a href="/#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</a>
            <Link to="/sermones" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.sermons')}</Link>
            <Link to="/galeria" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gallery')}</Link>
            <Link to="/eventos" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.events')}</Link>
            <a href="/#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</a>
            
            <div className="mobile-only-auth">
              <div className="language-switch mb-20">
                <button 
                  className={`lang-btn ${i18n.language.startsWith('es') ? 'active' : ''}`}
                  onClick={() => { changeLanguage('es'); setIsMobileMenuOpen(false); }}
                >
                  ESP
                </button>
                <button 
                  className={`lang-btn ${i18n.language.startsWith('en') ? 'active' : ''}`}
                  onClick={() => { changeLanguage('en'); setIsMobileMenuOpen(false); }}
                >
                  ENG
                </button>
              </div>
              {!user && (
                <div className="flex flex-column gap-10">
                  <button className="btn-primary" onClick={() => { setAuthMode('login'); setShowAuth(true); setIsMobileMenuOpen(false); }}>{t('nav.login')}</button>
                  <button className="btn-accent" onClick={() => { setAuthMode('register'); setShowAuth(true); setIsMobileMenuOpen(false); }}>{t('nav.register')}</button>
                </div>
              )}
            </div>
          </div>

          <div className="nav-actions-desktop flex align-center gap-20">
            <div className="language-switch hide-mobile">
              <button 
                className={`lang-btn ${i18n.language.startsWith('es') ? 'active' : ''}`}
                onClick={() => changeLanguage('es')}
              >
                ESP
              </button>
              <button 
                className={`lang-btn ${i18n.language.startsWith('en') ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                ENG
              </button>
            </div>

            {user ? (
              <div className="user-profile-nav" onClick={() => signOut(auth)}>
                <div className="user-avatar">
                  {user.displayName ? user.displayName[0] : (user.email ? user.email[0].toUpperCase() : 'U')}
                </div>
                <LogOut size={18} color="#999" />
              </div>
            ) : (
              <div className="hide-mobile flex gap-10">
                <button className="btn-login" onClick={() => { setAuthMode('login'); setShowAuth(true); }}>{t('nav.login')}</button>
                <button className="btn-primary" onClick={() => { setAuthMode('register'); setShowAuth(true); }}>{t('nav.register')}</button>
              </div>
            )}

            <button className="mobile-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {showAuth && (
        <div className="modal-overlay">
          <div className="auth-modal">
            <span className="close-modal" onClick={() => setShowAuth(false)}>&times;</span>
            <h2>{authMode === 'login' ? t('nav.login') : t('nav.register')}</h2>
            
            <form onSubmit={handleAuth}>
              {authMode === 'register' && (
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" className="form-control" required
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              )}
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" className="form-control" required
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" className="form-control" required
                  onChange={e => setFormData({...formData, password: e.target.value})}
                />
              </div>
              <button type="submit" className="btn-accent" style={{width: '100%', marginTop: '10px'}} disabled={loading}>
                {loading ? '...' : (authMode === 'login' ? t('nav.login') : t('nav.register'))}
              </button>
            </form>

            <div className="social-login">
              <button className="btn-google" onClick={handleGoogleLogin}>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="Google" />
                Google
              </button>
            </div>

            <div className="auth-switch">
              {authMode === 'login' ? (
                <>New here? <span onClick={() => setAuthMode('register')}>Sign up</span></>
              ) : (
                <>Already have an account? <span onClick={() => setAuthMode('login')}>Log in</span></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
