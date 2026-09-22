import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

interface ProjectGalleryModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export default function ProjectGalleryModal({ project, onClose }: ProjectGalleryModalProps) {
  const isOpen = !!project;
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const images = project.gallery || [];
  const title = project.title;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-cream rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-dark-olive/10">
          <h2 className="text-xl md:text-2xl font-display font-bold text-dark-olive">{title} Gallery</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-dark-olive/10 transition-colors text-dark-olive"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Gallery Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {images && images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-dark-olive/5">
                  <Image 
                    src={img} 
                    alt={`${title} image ${idx + 1}`} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-40 text-dark-olive/50">
              No images available for this project.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
