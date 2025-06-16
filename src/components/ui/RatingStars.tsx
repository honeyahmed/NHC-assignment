

export default function RatingStars({ rating }: { rating: number }) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </>
    )
  }
  