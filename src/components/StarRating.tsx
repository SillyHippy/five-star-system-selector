
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number;
  size?: "sm" | "md" | "lg";
  onChange?: (rating: number) => void;
  readOnly?: boolean;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  size = "md",
  onChange,
  readOnly = false,
  className,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (selectedRating: number) => {
    if (readOnly) return;
    setRating(selectedRating);
    onChange?.(selectedRating);
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-8 h-8";
      case "md":
      default:
        return "w-6 h-6";
    }
  };

  const getContainerClass = () => {
    switch (size) {
      case "sm":
        return "gap-1";
      case "lg":
        return "gap-2";
      case "md":
      default:
        return "gap-1.5";
    }
  };

  return (
    <div 
      className={cn(
        "flex items-center", 
        getContainerClass(),
        className
      )}
    >
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isActive = readOnly 
          ? starValue <= rating 
          : starValue <= (hoverRating || rating);

        return (
          <Star
            key={index}
            className={cn(
              getSizeClass(),
              "transition-all duration-150 cursor-pointer",
              isActive 
                ? "fill-yellow-400 text-yellow-400" 
                : "fill-transparent text-gray-300",
              !readOnly && "hover:scale-110"
            )}
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => !readOnly && setHoverRating(starValue)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
            strokeWidth={1.5}
          />
        );
      })}
      {!readOnly && (
        <span className="ml-2 text-sm text-gray-600">
          {hoverRating || rating || "Not rated"}
        </span>
      )}
    </div>
  );
};

export default StarRating;
