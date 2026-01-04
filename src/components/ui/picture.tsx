import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PictureProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

/**
 * Picture component with WebP support and fallback
 * Uses native lazy loading and modern image formats
 */
export function Picture({
  src,
  webpSrc,
  alt,
  className,
  imgClassName,
  priority = false,
  fill = false,
  width,
  height,
}: PictureProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP path if not provided
  const webpPath = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        fill && "absolute inset-0",
        className
      )}
    >
      {/* Placeholder shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {isInView && (
        <picture>
          {/* WebP format for modern browsers */}
          <source srcSet={webpPath} type="image/webp" />
          {/* Fallback to original format */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0",
              fill && "absolute inset-0 w-full h-full object-cover",
              imgClassName
            )}
          />
        </picture>
      )}
    </div>
  );
}

interface BackgroundPictureProps {
  src: string;
  webpSrc?: string;
  alt?: string;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

/**
 * Background image component with WebP support
 * Provides a fallback gradient while loading
 */
export function BackgroundPicture({
  src,
  webpSrc,
  alt = "",
  className,
  overlayClassName,
  children,
  priority = false,
}: BackgroundPictureProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(true);

  useEffect(() => {
    // Check WebP support
    const checkWebP = async () => {
      const webpData = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
      const img = new Image();
      img.onload = () => setSupportsWebP(true);
      img.onerror = () => setSupportsWebP(false);
      img.src = webpData;
    };
    checkWebP();
  }, []);

  useEffect(() => {
    const webpPath = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const imagePath = supportsWebP ? webpPath : src;
    
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      // Fallback to original if WebP fails
      if (supportsWebP) {
        const fallbackImg = new Image();
        fallbackImg.src = src;
        fallbackImg.onload = () => setIsLoaded(true);
      }
    };
  }, [src, webpSrc, supportsWebP]);

  const webpPath = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const imagePath = supportsWebP ? webpPath : src;

  return (
    <div className={cn("relative", className)}>
      {/* Fallback background */}
      <div className="absolute inset-0 bg-primary" />
      
      {/* Background image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ backgroundImage: `url(${imagePath})` }}
        role="img"
        aria-label={alt}
      />

      {/* Optional overlay */}
      {overlayClassName && (
        <div className={cn("absolute inset-0", overlayClassName)} />
      )}

      {/* Content */}
      {children}
    </div>
  );
}
