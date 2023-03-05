export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}

export interface Price {
  /**
   * Unique Stripe price ID.
   */
  readonly id: string;
  /**
   * ID of the Stripe product to which this price is related.
   */
  readonly product: string;
  /**
   * Whether the price can be used for new purchases.
   */
  readonly active: boolean;
  /**
   * Three-letter ISO currency code.
   */
  readonly currency: string;
  /**
   * The unit amount in cents to be charged, represented as a whole integer if possible.
   */
  readonly unit_amount: number | null;
  /**
   * A brief description of the price.
   */
  readonly description: string | null;
  /**
   * One of `one_time` or `recurring` depending on whether the price is for a one-time purchase
   * or a recurring (subscription) purchase.
   */
  readonly type: "one_time" | "recurring";
  /**
   * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
   */
  readonly interval: "day" | "month" | "week" | "year" | null;
  /**
   * The number of intervals (specified in the {@link Price.interval} attribute) between
   * subscription billings. For example, `interval=month` and `interval_count=3` bills every
   * 3 months.
   */
  readonly interval_count: number | null;
  /**
   * Default number of trial days when subscribing a customer to this price using
   * {@link https://stripe.com/docs/api#create_subscription-trial_from_plan | trial_from_plan}.
   */
  readonly trial_period_days: number | null;
  readonly [propName: string]: any;
}

export interface Product {
  /**
   * Unique Stripe product ID.
   */
  readonly id: string;
  /**
   * Whether the product is currently available for purchase.
   */
  readonly active: boolean;
  /**
   * The product's name, meant to be displayable to the customer. Whenever this product is sold
   * via a subscription, name will show up on associated invoice line item descriptions.
   */
  readonly name: string;
  /**
   * The product's description, meant to be displayable to the customer. Use this field to
   * optionally store a long form explanation of the product being sold for your own
   * rendering purposes.
   */
  readonly description: string | null;
  /**
   * The Firebase role that will be assigned to the user if they are subscribed to this plan.
   */
  readonly role: string | null;
  /**
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  readonly images: string[];
  /**
   * A list of Prices for this billing product. Only populated if explicitly requested
   * during retrieval.
   */
  readonly prices: Price[];
  /**
   * A collection of additional product metadata.
   */
  readonly metadata: {
    [key: string]: string | number | null;
  };
  readonly [propName: string]: any;
}
