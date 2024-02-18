export interface CardReview {
  stars: number;
  user: {
    name: string;
    place: string;
    avatar: string;
    comment: string;
  };
}
