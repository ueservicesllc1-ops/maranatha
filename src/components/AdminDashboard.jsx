import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Video, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Image as ImageIcon,
  Upload,
  Heart,
  HelpCircle,
  Edit2,
  Trash2,
  Plus
} from 'lucide-react';
import { db, storage } from '../firebase';
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [sermons, setSermons] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [isAddingSermon, setIsAddingSermon] = useState(false);
  const [newSermon, setNewSermon] = useState({
    title: '', speaker: '', category: '', date: '', year: '', image: null
  });
  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [faqForm, setFaqForm] = useState({ question: '', answer: '' });

  useEffect(() => {
    // Simulating fetching data from Firestore
    // In a real scenario, you'd fetch 'contacts' and 'users' collections
    const fetchData = async () => {
      try {
        // Fetch Messages (using example data if collection is empty)
        const msgSnapshot = await getDocs(collection(db, 'contacts'));
        const msgList = msgSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (msgList.length > 0) setMessages(msgList);
        else setMessages([
          { id: 1, name: "Carlos Mendoza", email: "carlos@gmail.com", subject: "Sermon de hoy", status: "new", date: "2026-03-13" },
          { id: 2, name: "Ana Silva", email: "ana.silva@outlook.com", subject: "Donación", status: "read", date: "2026-03-12" }
        ]);

        // Fetch Users
        const userSnapshot = await getDocs(collection(db, 'users'));
        const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (userList.length > 0) setUsers(userList);
        else setUsers([
          { id: 1, name: "Juan Pastor", email: "juan@maranatha.org", role: "Admin", date: "2026-01-10" },
          { id: 2, name: "Luis Hermano", email: "luis@gmail.com", role: "User", date: "2026-02-15" }
        ]);

        // Fetch Gallery Images
        const gallerySnapshot = await getDocs(query(collection(db, 'gallery'), orderBy('createdAt', 'desc')));
        setGalleryImages(gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        // Fetch Sermons
        const sermonSnapshot = await getDocs(query(collection(db, 'sermons'), orderBy('date', 'desc')));
        setSermons(sermonSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        // Fetch Volunteers
        const volunteerSnapshot = await getDocs(query(collection(db, 'volunteers'), orderBy('submittedAt', 'desc')));
        setVolunteers(volunteerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        // Fetch FAQs
        const faqSnapshot = await getDocs(query(collection(db, 'faqs'), orderBy('createdAt', 'asc')));
        setFaqs(faqSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `gallery/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      await addDoc(collection(db, 'gallery'), {
        url,
        title: file.name,
        createdAt: serverTimestamp()
      });

      // Refresh list
      const gallerySnapshot = await getDocs(query(collection(db, 'gallery'), orderBy('createdAt', 'desc')));
      setGalleryImages(gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      alert("Imagen subida con éxito");
    } catch (error) {
      console.error("Error uploading photo:", error);
      alert("Error al subir la imagen");
    } finally {
      setUploading(false);
    }
  };

  const handleSermonUpload = async (e) => {
    e.preventDefault();
    if (!newSermon.image) return alert("Por favor seleccione una imagen");

    setUploading(true);
    try {
      const storageRef = ref(storage, `sermons/${Date.now()}_${newSermon.image.name}`);
      await uploadBytes(storageRef, newSermon.image);
      const url = await getDownloadURL(storageRef);
      
      await addDoc(collection(db, 'sermons'), {
        title: newSermon.title,
        speaker: newSermon.speaker,
        category: newSermon.category,
        date: newSermon.date,
        year: newSermon.year,
        image: url,
        createdAt: serverTimestamp()
      });

      // Refresh list
      const sermonSnapshot = await getDocs(query(collection(db, 'sermons'), orderBy('date', 'desc')));
      setSermons(sermonSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      
      setIsAddingSermon(false);
      setNewSermon({ title: '', speaker: '', category: '', date: '', year: '', image: null });
      alert("Sermón subido con éxito");
    } finally {
      setUploading(false);
    }
  };

  const handleFaqSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      if (editingFaq) {
        await updateDoc(doc(db, 'faqs', editingFaq.id), {
          question: faqForm.question,
          answer: faqForm.answer,
          updatedAt: serverTimestamp()
        });
      } else {
        await addDoc(collection(db, 'faqs'), {
          ...faqForm,
          createdAt: serverTimestamp()
        });
      }
      
      // Refresh list
      const faqSnapshot = await getDocs(query(collection(db, 'faqs'), orderBy('createdAt', 'asc')));
      setFaqs(faqSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      
      setIsAddingFaq(false);
      setEditingFaq(null);
      setFaqForm({ question: '', answer: '' });
      alert("FAQ guardada con éxito");
    } catch (error) {
      console.error("Error saving FAQ:", error);
      alert("Error al guardar la FAQ");
    } finally {
      setUploading(false);
    }
  };

  const deleteFaq = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta pregunta?")) return;
    try {
      await deleteDoc(doc(db, 'faqs', id));
      setFaqs(faqs.filter(f => f.id !== id));
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'messages':
        return (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Mensajes Recibidos</h2>
              <div className="flex gap-10">
                <div className="flex align-center bg-gray-50 px-10 rounded-max border-1" style={{borderColor: '#eee', borderRadius: '50px', padding: '5px 15px'}}>
                  <Search size={16} color="#999" />
                  <input type="text" placeholder="Buscar mensajes..." style={{border: 'none', background: 'transparent', padding: '8px', fontSize: '13px', outline: 'none'}} />
                </div>
              </div>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Asunto</th>
                  <th>Estado</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {messages.map(msg => (
                  <tr key={msg.id}>
                    <td style={{fontWeight: 600}}>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td>{msg.subject}</td>
                    <td><span className={`status-badge status-${msg.status}`}>{msg.status}</span></td>
                    <td>{msg.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'gallery':
        return (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Galería de Fotos</h2>
              <div className="upload-btn-wrapper">
                <button className="btn-primary" disabled={uploading}>
                  {uploading ? 'SUBIENDO...' : 'SUBIR NUEVA FOTO'}
                </button>
                <input type="file" onChange={handleFileUpload} accept="image/*" />
              </div>
            </div>
            <div className="grid md-grid-3 gap-20" style={{padding: '30px'}}>
              {galleryImages.map(img => (
                <div key={img.id} className="admin-card" style={{height: '150px'}}>
                  <img src={img.url} alt="Gallery" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              ))}
              {galleryImages.length === 0 && (
                <p style={{gridColumn: 'span 3', textAlign: 'center', color: '#999'}}>No hay fotos subidas aún.</p>
              )}
            </div>
          </div>
        );
      case 'sermons':
        return (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Gestión de Sermones</h2>
              <button 
                className="btn-primary" 
                onClick={() => setIsAddingSermon(!isAddingSermon)}
                style={{padding: '8px 20px', fontSize: '12px'}}
              >
                {isAddingSermon ? 'CANCELAR' : 'AÑADIR SERMÓN'}
              </button>
            </div>
            
            {isAddingSermon && (
              <div style={{padding: '30px', borderBottom: '1px solid #eee', background: '#fafafa'}}>
                <form onSubmit={handleSermonUpload} className="grid md-grid-2 gap-20">
                  <div className="form-group">
                    <label>Título del Sermón</label>
                    <input 
                      type="text" className="form-control" placeholder="Ej: La Fe en Dios" required 
                      onChange={e => setNewSermon({...newSermon, title: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Predicador</label>
                    <input 
                      type="text" className="form-control" placeholder="Nombre del Pastor" required
                      onChange={e => setNewSermon({...newSermon, speaker: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Categoría</label>
                    <input 
                      type="text" className="form-control" placeholder="Ej: Esperanza" required
                      onChange={e => setNewSermon({...newSermon, category: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Fecha</label>
                    <input 
                      type="date" className="form-control" required
                      onChange={e => setNewSermon({...newSermon, date: e.target.value, year: e.target.value.split('-')[0]})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Imagen de Portada</label>
                    <input 
                      type="file" className="form-control" accept="image/*" required
                      onChange={e => setNewSermon({...newSermon, image: e.target.files[0]})}
                    />
                  </div>
                  <div className="form-group flex align-center" style={{paddingTop: '30px'}}>
                    <button type="submit" className="btn-accent" disabled={uploading} style={{width: '100%'}}>
                      {uploading ? 'SUBIENDO...' : 'GUARDAR SERMÓN'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            <table className="admin-table">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Título</th>
                  <th>Predicador</th>
                  <th>Categoría</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {sermons.map(sermon => (
                  <tr key={sermon.id}>
                    <td><img src={sermon.image} alt="" style={{width: '50px', height: '35px', borderRadius: '4px', objectFit: 'cover'}} /></td>
                    <td style={{fontWeight: 600}}>{sermon.title}</td>
                    <td>{sermon.speaker}</td>
                    <td><span className="status-badge" style={{background: '#eee'}}>{sermon.category}</span></td>
                    <td>{sermon.date}</td>
                  </tr>
                ))}
                {sermons.length === 0 && !isAddingSermon && (
                  <tr><td colSpan="5" style={{textAlign: 'center', padding: '40px', color: '#999'}}>No hay sermones registrados.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case 'volunteers':
        return (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Nuevos Voluntarios / Interesados</h2>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nombre Completo</th>
                  <th>Contacto</th>
                  <th>Creyente?</th>
                  <th>Detalles</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map(v => (
                  <tr key={v.id}>
                    <td>
                      <div style={{fontWeight: 700}}>{v.firstName} {v.lastName}</div>
                      <div style={{fontSize: '12px', color: '#999'}}>{v.age} años</div>
                    </td>
                    <td>
                      <div style={{fontSize: '13px'}}>{v.phone}</div>
                      <div style={{fontSize: '12px', color: '#777'}}>{v.email}</div>
                    </td>
                    <td>
                      <span className={`status-badge ${v.isBeliever === 'yes' ? 'status-new' : 'status-read'}`}>
                        {v.isBeliever === 'yes' ? 'SÍ' : 'NO'}
                      </span>
                    </td>
                    <td>
                      {v.isBeliever === 'yes' ? (
                        <span style={{fontSize: '13px'}}>{v.yearsAsBeliever} años de fe</span>
                      ) : (
                        <span style={{fontSize: '13px', color: v.joinVolunteers === 'yes' ? '#2e7d32' : '#c62828'}}>
                          {v.joinVolunteers === 'yes' ? 'Quiere ser Voluntario' : 'No interesado'}
                        </span>
                      )}
                    </td>
                    <td style={{fontSize: '12px'}}>
                      {v.submittedAt?.toDate().toLocaleDateString() || 'Reciente'}
                    </td>
                  </tr>
                ))}
                {volunteers.length === 0 && (
                  <tr><td colSpan="5" style={{textAlign: 'center', padding: '40px', color: '#999'}}>No hay registros de voluntarios aún.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case 'faqs':
        return (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Preguntas Frecuentes (FAQs)</h2>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setIsAddingFaq(!isAddingFaq);
                  setEditingFaq(null);
                  setFaqForm({ question: '', answer: '' });
                }}
              >
                {isAddingFaq ? 'CANCELAR' : 'AÑADIR PREGUNTA'}
              </button>
            </div>

            {isAddingFaq && (
              <div style={{padding: '30px', borderBottom: '1px solid #eee', background: '#fafafa'}}>
                <form onSubmit={handleFaqSubmit}>
                  <div className="form-group mb-20">
                    <label>Pregunta</label>
                    <input 
                      type="text" className="form-control" required
                      value={faqForm.question}
                      onChange={e => setFaqForm({...faqForm, question: e.target.value})}
                    />
                  </div>
                  <div className="form-group mb-20">
                    <label>Respuesta</label>
                    <textarea 
                      className="form-control" required rows="4"
                      value={faqForm.answer}
                      onChange={e => setFaqForm({...faqForm, answer: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-accent" disabled={uploading}>
                    {uploading ? 'GUARDANDO...' : (editingFaq ? 'ACTUALIZAR' : 'GUARDAR')}
                  </button>
                </form>
              </div>
            )}

            <div className="faq-admin-list" style={{padding: '20px'}}>
              {faqs.map(faq => (
                <div key={faq.id} className="admin-faq-item flex justify-between align-center" style={{padding: '15px', borderBottom: '1px solid #eee'}}>
                  <div style={{maxWidth: '80%'}}>
                    <div style={{fontWeight: 700, color: 'var(--primary)', marginBottom: '5px'}}>{faq.question}</div>
                    <div style={{fontSize: '14px', color: '#666'}}>{faq.answer}</div>
                  </div>
                  <div className="flex gap-10">
                    <button 
                      onClick={() => {
                        setEditingFaq(faq);
                        setFaqForm({ question: faq.question, answer: faq.answer });
                        setIsAddingFaq(true);
                      }}
                      style={{background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)'}}
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => deleteFaq(faq.id)}
                      style={{background: 'none', border: 'none', cursor: 'pointer', color: '#ff4d4d'}}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
              {faqs.length === 0 && (
                <div style={{textAlign: 'center', padding: '40px', color: '#999'}}>No hay preguntas registradas.</div>
              )}
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2>Usuarios Registrados</h2>
              <button className="btn-primary" style={{padding: '8px 20px', fontSize: '12px'}}>AÑADIR USUARIO</button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Fecha Registro</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td style={{fontWeight: 600}}>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon" style={{background: 'rgba(31, 35, 70, 0.1)', color: '#1F2346'}}><MessageSquare /></div>
                <div className="stat-info">
                  <h3>{messages.length}</h3>
                  <p>Mensajes nuevos</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon" style={{background: 'rgba(197, 164, 109, 0.1)', color: '#C5A46D'}}><Users /></div>
                <div className="stat-info">
                  <h3>{users.length}</h3>
                  <p>Usuarios activos</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon" style={{background: 'rgba(52, 58, 107, 0.1)', color: '#343A6B'}}><Video /></div>
                <div className="stat-info">
                  <h3>{sermons.length}</h3>
                  <p>Sermones subidos</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon" style={{background: 'rgba(232, 245, 233, 0.5)', color: '#2e7d32'}}><Heart /></div>
                <div className="stat-info">
                  <h3>{volunteers.length}</h3>
                  <p>Nuevos Voluntarios</p>
                </div>
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h2>Actividad Reciente</h2>
              </div>
              <div style={{padding: '30px', textAlign: 'center', color: '#999'}}>
                <p>No hay actividad reciente para mostrar.</p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div style={{padding: '0 30px 30px'}}>
          <img src="/images/fondo negro.png" alt="Logo" style={{height: '50px', filter: 'brightness(0) invert(1)'}} />
        </div>
        <nav className="admin-nav">
          <div 
            className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} /> Dashboard
          </div>
          <div 
            className={`admin-nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <MessageSquare size={20} /> Mensajes
          </div>
          <div 
            className={`admin-nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <Users size={20} /> Usuarios
          </div>
          <div 
            className={`admin-nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <ImageIcon size={20} /> Galería
          </div>
          <div 
            className={`admin-nav-item ${activeTab === 'sermons' ? 'active' : ''}`}
            onClick={() => setActiveTab('sermons')}
          >
            <Video size={20} /> Sermones
          </div>
          <div 
            className={`admin-nav-item ${activeTab === 'volunteers' ? 'active' : ''}`}
            onClick={() => setActiveTab('volunteers')}
          >
            <Heart size={20} /> Voluntarios
          </div>
          <div 
            className={`admin-nav-item ${activeTab === 'faqs' ? 'active' : ''}`}
            onClick={() => setActiveTab('faqs')}
          >
            <HelpCircle size={20} /> FAQs
          </div>
          <div style={{marginTop: 'auto', paddingTop: '40px'}}>
            <div className="admin-nav-item"><Settings size={20} /> Ajustes</div>
            <div className="admin-nav-item" style={{color: '#ff4d4d'}}><LogOut size={20} /> Salir</div>
          </div>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header flex justify-between align-center">
          <div>
            <h1>Panel Administrativo</h1>
            <p style={{color: '#999', fontSize: '14px'}}>Bienvenido de vuelta, Administrador</p>
          </div>
          <div className="flex gap-20 align-center">
            <Bell size={20} color="#999" />
            <div className="flex align-center gap-10">
              <div style={{width: '40px', height: '40px', background: '#C5A46D', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                AD
              </div>
            </div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
