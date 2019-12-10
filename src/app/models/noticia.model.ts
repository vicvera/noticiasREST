export interface NoticiasTweets {
    status?: string;
    totalResults?: number;
    tweets: Tweet[];
}

export interface Tweet {
    tweet_url?: string;
    full_text: string;
    name: string;
    title: string;
    extended_entities?: string;
    media: string;
}
