import { injectGlobal } from 'styled-components';

/* eslinet-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower');

  body {
    font-family: 'Indie Flower', cursive;
    fint-size: 24px;
  }

  .vertical-timeline-element-content {
    color: black;
  }
  
  .vertical-timeline-element--work .vertical-timeline-element-content {
    border-top: 3px solid #2196f3;
  }
  
  .vertical-timeline-element--education .vertical-timeline-element-content {
    border-top: 3px solid #e91e63;
  }
`