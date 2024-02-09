export interface CardReview {
  stars: number;
  user: {
    name: string;
    profession: string;
    avatar: string;
    comment: string;
  };
}
