import type { Schema, Struct } from '@strapi/strapi';

export interface CardsBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_benefit_cards';
  info: {
    displayName: 'Benefit card';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_info_cards';
  info: {
    displayName: 'Info card';
  };
  attributes: {
    details: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_testimonial_cards';
  info: {
    displayName: 'Testimonial card';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    avatarImageUrl: Schema.Attribute.String;
    initials: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['text', 'video']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
    videoImageUrl: Schema.Attribute.String;
  };
}

export interface SectionsEmotionalTurn extends Struct.ComponentSchema {
  collectionName: 'components_sections_emotional_turns';
  info: {
    displayName: 'Emotional turn';
  };
  attributes: {
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    reframeLabel: Schema.Attribute.String & Schema.Attribute.Required;
    reframes: Schema.Attribute.JSON & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    worries: Schema.Attribute.JSON & Schema.Attribute.Required;
    worryLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsEnrollmentHelp extends Struct.ComponentSchema {
  collectionName: 'components_sections_enrollment_helps';
  info: {
    displayName: 'Enrollment help';
  };
  attributes: {
    advisorImageUrl: Schema.Attribute.String;
    advisorInitials: Schema.Attribute.String & Schema.Attribute.Required;
    advisorName: Schema.Attribute.String & Schema.Attribute.Required;
    closing: Schema.Attribute.Text & Schema.Attribute.Required;
    contactSuffix: Schema.Attribute.Text & Schema.Attribute.Required;
    emphasis: Schema.Attribute.Text & Schema.Attribute.Required;
    introAfterName: Schema.Attribute.Text & Schema.Attribute.Required;
    introBeforeName: Schema.Attribute.String & Schema.Attribute.Required;
    phonePrimary: Schema.Attribute.String & Schema.Attribute.Required;
    phoneSecondary: Schema.Attribute.String & Schema.Attribute.Required;
    prompt: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    viberLabel: Schema.Attribute.String & Schema.Attribute.Required;
    whatsappLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    addressLine1: Schema.Attribute.String & Schema.Attribute.Required;
    addressLine2: Schema.Attribute.String & Schema.Attribute.Required;
    enrollmentEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    officeEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    afterImageUrl: Schema.Attribute.String;
    beforeImageUrl: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    lead: Schema.Attribute.Text & Schema.Attribute.Required;
    note: Schema.Attribute.String;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_forms';
  info: {
    displayName: 'Lead form';
  };
  attributes: {
    areaCodeLabel: Schema.Attribute.String & Schema.Attribute.Required;
    areaCodePlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    childAgeLabel: Schema.Attribute.String;
    childAgePlaceholder: Schema.Attribute.String;
    countryCodeLabel: Schema.Attribute.String & Schema.Attribute.Required;
    emailPlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    errorMessage: Schema.Attribute.Text;
    formName: Schema.Attribute.String;
    institution: Schema.Attribute.String;
    namePlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    phoneLabel: Schema.Attribute.String & Schema.Attribute.Required;
    phonePlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    submitLabel: Schema.Attribute.String;
    successMessage: Schema.Attribute.Text;
    successTitle: Schema.Attribute.String;
  };
}

export interface SectionsModernEducation extends Struct.ComponentSchema {
  collectionName: 'components_sections_modern_educations';
  info: {
    displayName: 'Modern education';
  };
  attributes: {
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    imagePlaceholder: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    paragraphs: Schema.Attribute.JSON & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsProgramChoice extends Struct.ComponentSchema {
  collectionName: 'components_sections_program_choices';
  info: {
    displayName: 'Program choice';
  };
  attributes: {
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    paragraphs: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_section_headers';
  info: {
    displayName: 'Section header';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSimpleCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_simple_ctas';
  info: {
    displayName: 'Simple CTA';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSpecialConditions extends Struct.ComponentSchema {
  collectionName: 'components_sections_special_conditions';
  info: {
    displayName: 'Special conditions';
  };
  attributes: {
    ctaText: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String;
    imagePlaceholder: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    paragraphs: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.benefit-card': CardsBenefitCard;
      'cards.info-card': CardsInfoCard;
      'cards.testimonial-card': CardsTestimonialCard;
      'sections.emotional-turn': SectionsEmotionalTurn;
      'sections.enrollment-help': SectionsEnrollmentHelp;
      'sections.footer': SectionsFooter;
      'sections.hero': SectionsHero;
      'sections.lead-form': SectionsLeadForm;
      'sections.modern-education': SectionsModernEducation;
      'sections.program-choice': SectionsProgramChoice;
      'sections.section-header': SectionsSectionHeader;
      'sections.simple-cta': SectionsSimpleCta;
      'sections.special-conditions': SectionsSpecialConditions;
      'shared.seo': SharedSeo;
    }
  }
}
