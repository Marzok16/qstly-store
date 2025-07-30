import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="text-center py-5">
      <h1 className="display-4 fw-bold">{t('welcome')}</h1>
      <p className="lead text-muted">{t('shop_subtitle')}</p>

      <Link
  to="/products"
  className="btn btn-primary btn-lg mt-3 mb-5"
  style={{ border: 'none', color: '#fff', fontFamily: 'Poppins' }}
>
  {t('browse_products')}
</Link>


      {/* Featured Categories */}
      <section className="container my-5">
        <h2 className="mb-4">{t('featured_categories')}</h2>
        <div className="row">
          {[
            { key: 'laptops', icon: '💻' },
            { key: 'smartphones', icon: '📱' },
            { key: 'tvs', icon: '📺' },
            { key: 'accessories', icon: '🎧' },
          ].map(({ key, icon }) => (
            <div key={key} className="col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div style={{ fontSize: '2rem' }}>{icon}</div>
                  <h5 className="card-title mt-2">{t(`categories.${key}`)}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Qstly */}
      <section className="bg py-5">
        <div className="container">
          <h2 className="mb-5">
            <Trans i18nKey="why_title">
              Why Shop with <span style={{ color: '#0641c0ff' }}>Qstly</span>?
            </Trans>
          </h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>{t('why.installment')}</h5>
              <p>{t('why.installment_text')}</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>{t('why.secure')}</h5>
              <p>{t('why.secure_text')}</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>{t('why.support')}</h5>
              <p>{t('why.support_text')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
