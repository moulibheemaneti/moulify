/** CamelCase platform key (twitter, github, instagram, facebook, x). */
export type SocialPlatformId = 'twitter' | 'github' | 'instagram' | 'facebook' | 'x'

/** Config: optional URL per platform. Only listed platforms are shown. */
export type SocialLinksConfig = Partial<Record<SocialPlatformId, string>>

export class SocialPlatform {
  constructor(
    public readonly id: SocialPlatformId,
    public readonly name: string,
    public readonly link?: string,
  ) { }

  static Facebook = new SocialPlatform('facebook', 'Facebook')
  static GitHub = new SocialPlatform('github', 'GitHub')
  static Instagram = new SocialPlatform('instagram', 'Instagram')
  static Twitter = new SocialPlatform('twitter', 'Twitter')
  static X = new SocialPlatform('x', 'X')

  static all = [
    this.Facebook,
    this.GitHub,
    this.Instagram,
    this.Twitter,
    this.X,
  ]

  /** Build list with links from config (only platforms present in config, with their URL). */
  static fromConfig(config: SocialLinksConfig): SocialPlatform[] {
    return this.all
      .filter(p => config[p.id])
      .map(p => new SocialPlatform(p.id, p.name, config[p.id]))
  }

  /** Merge configs (later overrides earlier) and return SocialPlatform[] with links set. */
  static fromConfigs(...configs: (SocialLinksConfig | undefined)[]): SocialPlatform[] {
    const merged: SocialLinksConfig = {}
    for (const config of configs) {
      if (!config) {
        continue
      }
      for (const p of this.all) {
        if (config[p.id] !== undefined) {
          merged[p.id] = config[p.id]
        }
      }
    }
    return this.fromConfig(merged)
  }
}

export interface SocialLinksProps {
  /** Override or set links per platform (optional). Merged with module config. */
  links?: SocialLinksConfig
}
