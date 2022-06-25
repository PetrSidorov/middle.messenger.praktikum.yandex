
import {default as buttonPrimary} from '../../components/buttons/buttonPrimary/buttonPrimary.tmpl'
import {default as buttonSecondary} from '../../components/buttons/buttonSecondary/buttonSecondary.tmpl'
const template =  `
<form class="entry-form">
<h2 class="center-text">{{ formHeading }}</h2>
<div class="input-section">

    <div class="form-field">
        <input required pattern="\S+.*" id="username" class="form-text-input" type="text">
        <label class="input-label" for="username">{{ inputs.login.placeholder }}</label>
    </div>
    <div class="form-field">
        <input required pattern="\S+.*" id="password" class="form-text-input" type="text">
        <label class="input-label" for="password">{{ inputs.password.placeholder }}</label>
    </div>
  
</div>

<div class="action-buttons">
    ${buttonPrimary}
    ${buttonSecondary}
</div>
</form>
`;
export default template;