import { expect, test,describe } from 'vitest'
import { render } from 'vitest-browser-vue'
import axe from 'axe-core';
import Form from '../../../components/form/component-form.vue';
import { FormInputTypes } from '../../../components/form/enums';
import { mount } from '@vue/test-utils';
import { ValueChangedEvent } from '../../../components';
import { sleep } from '../../common';

describe('Component Form', () => {
  test('check accessibility',async() => {
    const {container} = render(Form, {
      props: {
        elements:[
          {
            name:'autocomplete',
            type:FormInputTypes.autocomplete,
            label:'autocomplete',
            form_columns:12,
            additional:{
              values:[],
              title:'autocomplete title'
            }
          },
          {
            name:'button',
            type:FormInputTypes.button,
            label:'test button',
            form_columns:11,
            additional:{
              icon:'person'
            }
          },
          {
            name:'checkbox-group',
            type:FormInputTypes.checkbox_group,
            label:'checkbox group',
            form_columns:10,
            additional:{
              values:[
                {value:1,label:'one'},
                {value:2,label:'two'},
                {value:3,label:'three'},
                {value:4,label:'four'}
              ]
            }
          },
          {
            name:'checkbox',
            type:FormInputTypes.checkbox,
            label:'checkbox label',
            form_columns:9
          },
          {
            name:'date',
            type:FormInputTypes.date,
            label:'Date label',
            form_columns:8,
            additional:{
              includeTime:true
            }
          },
          {
            name:'header',
            type:FormInputTypes.header,
            label:'Header Label',
            form_columns:7
          },
          {
            name:'number',
            type:FormInputTypes.number,
            label:'Number Label',
            form_columns:6,
            additional:{
              min:0,
              max:100,
              step:1
            }
          },
          {
            name:'paragraph',
            type:FormInputTypes.paragraph,
            label:'Paragraph content',
            form_columns:5
          },
          {
            name:'radio-group',
            type:FormInputTypes.radio_group,
            label:'Radio Group Label',
            form_columns:4,
            additional:{
              values:[
                {value:1,label:'one'},
                {value:2,label:'two'},
                {value:3,label:'three'},
                {value:4,label:'four'}
              ]
            }
          },
          {
            name:'select',
            type:FormInputTypes.select,
            label:'Select Label',
            form_columns:3,
            additional:{
              values:[
                {value:1,label:'one'},
                {value:2,label:'two'},
                {value:3,label:'three'},
                {value:4,label:'four'}
              ]
            }
          },
          {
            name:'select-multi',
            type:FormInputTypes.select,
            label:'Select Multi Label',
            form_columns:3,
            additional:{
              multiple:true,
              values:[
                {value:1,label:'one'},
                {value:2,label:'two'},
                {value:3,label:'three'},
                {value:4,label:'four'}
              ]
            }
          },
          {
            name:'switch',
            type:FormInputTypes.switch,
            label:'switch label',
            form_columns:2
          },
          {
            name:'textarea',
            type:FormInputTypes.textarea,
            label:'TextArea Label',
            form_columns:1,
            additional:{
              rows:5,
              cols:50
            }
          },
          {
            name:'time',
            type:FormInputTypes.time,
            label:'Time Label'
          },
          {
            name:'subform',
            type:FormInputTypes.subform,
            additional:{
              fields:[
                {
                  name:'time',
                  type:FormInputTypes.time,
                  label:'Time Label'
                }
              ]
            }
          }
        ]
      },
    });

    const accessibilityScanResults =  await axe.run(container);

    expect(accessibilityScanResults.violations).toEqual([]);
  }),
  test('check value changed',async()=>{
    let event : ValueChangedEvent|null = null;
    const wrapper = mount(Form,{
      props:{
        elements:[
          {
            name:'textfield',
            type:FormInputTypes.text,
            label:'Test Text Field',
            additional:{
              subtype:'text'
            }
          }
        ],
        onValueChanged:(val)=>event=val
      }
    });

    await wrapper.vm.setValues({textfield:'testing'});

    expect(event).not.toBeNull();

    expect(event!.name).toBe('textfield');
    expect(event!.value).toBe('testing');
  }),
  test('check button clicked',async()=>{
    let buttonName : string|null = null;
    const wrapper = mount(Form,{
      props:{
        elements:[
          {
            name:'button',
            type:FormInputTypes.button,
            label:'My Button'
          }
        ],
        onButtonClicked:(name)=>buttonName=name
      }
    });

    const button = wrapper.find('button');

    button.element.click();

    expect(buttonName).toBe('button');
  }),
  test('check set/get values',async()=>{
    const wrapper = mount(Form,{
      props:{
        elements:[
          {
            name:'textfield',
            type:FormInputTypes.text,
            label:'Test Text Field',
            additional:{
              subtype:'text'
            }
          }
        ]
      }
    });

    await wrapper.vm.setValues({textfield:'testing'});

    const currentValues = wrapper.vm.getValues();

    expect(currentValues.textfield).toBe('testing');
  }),
  test('check is valid',async()=>{
    const wrapper = mount(Form,{
      props:{
        elements:[
          {
            name:'textfield',
            type:FormInputTypes.text,
            label:'Test Text Field',
            additional:{
              subtype:'text'
            },
            required:true
          }
        ]
      }
    });

    expect(wrapper.vm.isValid()).toBe(false);

    await wrapper.vm.setValues({textfield:'testing'});

    expect(wrapper.vm.isValid()).toBe(true);
  }),
  test('check hide/show',async()=>{
    const wrapper = mount(Form,{
      props:{
        elements:[
          {
            name:'textfield',
            type:FormInputTypes.text,
            label:'Test Text Field',
            additional:{
              subtype:'text'
            }
          }
        ]
      }
    });

    wrapper.vm.hideField('textfield');

    await sleep(100);

    let input = wrapper.findAll('input');

    expect(input).toHaveLength(0);

    wrapper.vm.showField('textfield');

    await sleep(300);

    input = wrapper.findAll('input');

    expect(input).toHaveLength(1);
  }),
  test('check enable/disable',async()=>{
    const wrapper = mount(Form,{
      props:{
        elements:[
          {
            name:'textfield',
            type:FormInputTypes.text,
            label:'Test Text Field',
            additional:{
              subtype:'text'
            }
          }
        ]
      }
    });

    wrapper.vm.disableField('textfield');

    await sleep(100);

    let input = wrapper.findAll('input');

    expect(input).toHaveLength(1);
    expect(input[0].attributes.disabled).not.toBeNull();

    wrapper.vm.enableField('textfield');

    await sleep(300);

    input = wrapper.findAll('input');

    expect(input).toHaveLength(1);
    expect(input[0].attributes.disabled).toBeUndefined();
  })
});