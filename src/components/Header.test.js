import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import { NAVBAR_BUTTONS } from '../constants';
import BasicButton from '../elements/buttons/BasicButton';
import CTAButton from '../elements/buttons/CTAButton';

describe('<Header />', () => {
    // setup
    let activeButton;
    let setActiveButton;
    let component;
    beforeEach(() => {
        activeButton = NAVBAR_BUTTONS.EXPLORE;
        setActiveButton = jest.fn();
        component = shallow(
            <Header 
                activeButton={activeButton} 
                setActiveButton={setActiveButton}
            />
        );
    });

    it('should render without crashing', () => {
        expect(component).toBeDefined();
    });

    it('should have more than one BasicButton and one CTAButton', () => {
        expect(component.find(BasicButton).length).toBeGreaterThan(1);
        expect(component.find(CTAButton).length).toBe(1);
    });

    it('should trigger the setActiveButton on BasicButton click', () => {
        // pick the first BasicButton and click it
        component
            .find(BasicButton)
            .first()
            .simulate('click');

        expect(setActiveButton).toHaveBeenCalled();
    });

    it('should not trigger the setActiveButton on CTAButton click', () => {
        // pick the CTAButton button and click it
        component
            .find(CTAButton)
            .simulate('click');

        expect(setActiveButton).not.toHaveBeenCalled();
    });
});