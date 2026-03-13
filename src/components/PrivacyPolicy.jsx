import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, FileText, Users, Image as ImageIcon } from 'lucide-react';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <header className="page-header">
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>Política de Privacidad</h1>
          <p>Comprometidos con la protección de tu información y nuestra misión espiritual.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container max-width-800">
          <div className="policy-intro mb-40">
            <p>En <strong>Maranatha World Mission</strong>, valoramos y respetamos la privacidad de cada miembro de nuestra comunidad, visitantes y colaboradores. Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos su información personal cuando interactúa con nosotros a través de nuestro sitio web, servicios religiosos y actividades ministeriales.</p>
          </div>

          <div className="policy-grid grid gap-40">
            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-primary-light">
                  <Shield size={24} className="color-primary" />
                </div>
                <h3>1. Nuestro Compromiso Ético</h3>
              </div>
              <p>Como ministerio cristiano, manejamos su información con integridad y respeto. No vendemos ni alquilamos sus datos personales a terceros. Su confianza es fundamental para nuestra labor espiritual.</p>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-accent-light">
                  <Eye size={24} className="color-accent" />
                </div>
                <h3>2. Información que Recopilamos</h3>
              </div>
              <p>Recopilamos información que usted nos proporciona directamente cuando:</p>
              <ul className="policy-list">
                <li>Se registra para eventos o membresía.</li>
                <li>Envía peticiones de oración (estas se manejan con estricta confidencialidad ministerial).</li>
                <li>Realiza donaciones o diezmos a través de plataformas seguras.</li>
                <li>Se inscribe como voluntario en nuestros diversos ministerios.</li>
              </ul>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-primary-light">
                  <ImageIcon size={24} className="color-primary" />
                </div>
                <h3>3. Uso de Imagen y Multimedia</h3>
              </div>
              <p>Durante nuestros servicios y eventos públicos, podemos capturar fotos o videos para uso en nuestras redes sociales, transmisiones en vivo y materiales de promoción del ministerio. Si usted no desea ser incluido en este material, por favor comuníquelo a nuestro personal de recepción.</p>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-accent-light">
                  <Lock size={24} className="color-accent" />
                </div>
                <h3>4. Seguridad de los Datos</h3>
              </div>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Las transacciones financieras se procesan a través de proveedores de servicios de pago certificados con encriptación de nivel bancario.</p>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-primary-light">
                  <Users size={24} className="color-primary" />
                </div>
                <h3>5. Menores de Edad</h3>
              </div>
              <p>La privacidad de los niños es prioritaria. No recopilamos información personal de menores de 13 años sin el consentimiento explícito de sus padres o tutores legales.</p>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-accent-light">
                  <FileText size={24} className="color-accent" />
                </div>
                <h3>6. Sus Derechos</h3>
              </div>
              <p>Usted tiene derecho a acceder, corregir o solicitar la eliminación de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de los medios indicativos en nuestra sección de contacto.</p>
            </div>
          </div>

          <div className="policy-footer mt-60 text-center p-30 border-radius-15 bg-light">
            <h4>¿Tiene preguntas sobre esta política?</h4>
            <p className="mb-20">Estamos aquí para aclararle cualquier duda sobre cómo cuidamos de su información en el ministerio.</p>
            <a href="mailto:info@maranathamission.org" className="btn-primary">Contactar con la Administración</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
