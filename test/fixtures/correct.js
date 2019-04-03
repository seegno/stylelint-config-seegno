// `declaration-block-semicolon-newline-after`.
const DeclarationBlockSemicolonNewlineAfter = styled.div`
  color: red;
  display: block;
`;

// `declaration-block-semicolon-space-before`.
const DeclarationBlockSemicolonSpaceBefore = styled.div`
  color: red;
`;

// `declaration-colon-space-after`.
const DeclarationColonSpaceAfter = styled.div`
  color: red;
`;

// `indentation`.
const Indentation = styled.div`
  color: red;
`;

// `length-zero-no-unit`.
const LengthZeroNoUnit = styled.div`
  top: 0;
`;

// `number-leading-zero`.
const NumberLeadingZero = styled.div`
  line-height: 0.5;
`;

// `number-no-trailing-zeros`.
const NumberNoTrailingZeros = styled.div`
  top: 1px
`;

// `order/properties-order`.
const PropertiesAlphabeticalOrder = styled.div`
  color: red;
  display: block;
`;

// `property-case`.
const PropertyCase = styled.div`
  width: 1px;
`;

// `rule-empty-line-before`.
const RuleEmptyLineBefore = styled.div`
  a {
    color: red;
  }

  b {
    color: blue;
  }
`;

// `selector-pseudo-element-colon-notation`.
const SelectorPseudoElementColonNotation = styled.div`
  &::before {
    content: '';
  }
`;

// `unit-case`.
const UnitCase = styled.div`
  top: 1px;
`;

// `value-keyword-case`.
const ValueKeywordCase = styled.div`
  display: block;
`;

// `at-rule-no-unknown`.
const AtRuleNoUnknown = styled.div`
  @media (max-width: 1200px) {
    color: red;
  }
`;

// `block-no-empty`.
const BlockNoEmpty = styled.div`
  @media (max-width: 1200px) {
    color: red;
  }
`;

// `color-no-invalid-hex`.
const ColorNoInvalidHex = styled.div`
  color: #000;
`;

// `declaration-block-no-duplicate-properties`.
const DeclarationBlockNoDuplicateProperties = styled.div`
  font-size: 16px;
  font-size: 1rem;
`;

// `font-family-no-duplicate-names`.
const FontFamilyNoDuplicateNames = styled.div`
  font-family: Times, serif;
`;

// `font-family-no-missing-generic-family-keyword`.
const FontFamilyNoMissingGenericFamilyKeyword = styled.div`
  font-family: Times, serif;
`;

// `function-calc-no-unspaced-operator`.
const FunctionCalcNoUnspacedOperator = styled.div`
  top: calc(1px + 2px);
`;

// `function-linear-gradient-no-nonstandard-direction`.
const FunctionLinearGradientNoNonstandardDirection = styled.div`
  background: linear-gradient(to top, #fff, #000);
`;

// `media-feature-name-no-unknown`.
const MediaFeatureNameNoUnknown = styled.div`
  @media screen and (min-width: 1200px) {
    color: red;
  }
`;

// `no-descending-specificity`.
const NoDescendingSpecificity = styled.div`
  &::before {
    content: '';
  }

  &:hover::before {
    color: blue;
  }
`;

// `no-extra-semicolons`.
const NoExtraSemicolons = styled.div`
  color: red;
`;

// `property-no-unknown`.
const PropertyNoUnknown = styled.div`
  color: red;
`;

// `selector-pseudo-class-no-unknown`.
const SelectorPseudoClassNoUnknown = styled.div`
  &:hover {
    color: red;
  }
`;

// `selector-pseudo-element-no-unknown`.
const SelectorPseudoElementNoUnknown = styled.div`
  &::before {
    content: '';
  }
`;

// `selector-type-no-unknown`.
const SelectorTypeNoUnknown = styled.div`
  li {
    color: red;
  }
`;

// `string-no-newline`.
const StringNoNewline = styled.div`
  font-family: "Times New Roman", serif;
`;

// `unit-no-unknown`.
const UnitNoUnknown = styled.div`
  top: 1px;
`;

// `value-no-vendor-prefix`.
const ValueNoVendorPrefix = styled.div`
  display: flex;
`;

// `property-no-vendor-prefix`.
const PropertyNoVendorPrefix = styled.div`
  transform: scale(1);
`;
