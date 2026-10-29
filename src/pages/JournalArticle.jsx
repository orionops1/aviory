import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { journalArticles } from '../data/products'
import './JournalArticle.css'

export default function JournalArticle() {
  const { slug } = useParams()
  const article = journalArticles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)', textAlign: 'center' }}>
        <h2>Article not found</h2>
        <Link to="/journal" className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
          Back to Journal
        </Link>
      </div>
    )
  }

  const relatedArticles = journalArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <>
      {/* HEADER */}
      <section style={{
        backgroundColor: '#111111',
        color: '#F8F4EF',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF7F', marginBottom: 'var(--spacing-md)' }}>
            {article.category}
          </div>
          <h1 style={{ color: '#F8F4EF' }}>{article.title}</h1>
          <div style={{ fontSize: '0.9rem', marginTop: 'var(--spacing-lg)', opacity: 0.8 }}>
            By {article.author} • {new Date(article.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div style={{ width: '100%', maxHeight: '400px', overflow: 'hidden', backgroundColor: '#E8E3DC' }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* CONTENT */}
      <article className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div
            style={{
              color: '#2B2B2B',
              lineHeight: 1.8,
              fontSize: '1.05rem'
            }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* AUTHOR BIO */}
          <div style={{
            backgroundColor: '#F8F4EF',
            padding: 'var(--spacing-lg)',
            marginTop: 'var(--spacing-3xl)',
            borderLeft: '4px solid #D4AF7F)'
          }}>
            <h4 style={{ marginBottom: 'var(--spacing-md)' }}>About the Author</h4>
            <p style={{ marginBottom: 'var(--spacing-md)', fontStyle: 'italic' }}>
              {article.author}
            </p>
            <p style={{ color: '#2B2B2B' }}>
              Our expert contributors bring decades of experience in gemstones, jewelry design, and luxury craftsmanship to share their knowledge and insights.
            </p>
          </div>

          {/* CTA */}
          <div style={{
            backgroundColor: 'linear-gradient(135deg, #111111 0%, #2B2B2B 100%)',
            color: '#F8F4EF',
            padding: 'var(--spacing-2xl)',
            marginTop: 'var(--spacing-3xl)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#D4AF7F', marginBottom: 'var(--spacing-md)' }}>Inspired to Create?</h3>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
              Begin your bespoke journey and bring your vision to life with AVIORY & CO.
            </p>
            <Link to="/bespoke" className="btn btn-primary">Start Creating</Link>
          </div>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section style={{ backgroundColor: '#F8F4EF', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
          <div className="container">
            <h2 style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>Related Articles</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-xl)'
            }}>
              {relatedArticles.map(related => (
                <Link
                  key={related.id}
                  to={`/journal/${related.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D0CCBE',
                    padding: 'var(--spacing-lg)',
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#D4AF7F'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 127, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#D0CCBE'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  >
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A68563', marginBottom: 'var(--spacing-sm)' }}>
                      {related.category}
                    </div>
                    <h4 style={{ marginBottom: 'var(--spacing-md)', lineHeight: 1.3 }}>{related.title}</h4>
                    <p style={{ color: '#2B2B2B', fontSize: '0.9rem' }}>
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BACK LINK */}
      <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-xl)' }}>
        <Link to="/journal" className="btn btn-outline">← Back to Journal</Link>
      </div>
    </>
  )
}
