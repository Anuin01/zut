'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { IconService } from '../../../../demo/service/IconService';
import { Calendar } from 'primereact/calendar';

interface DropdownItem {
    name: string;
    code: string;
}

const FormLayoutDemo = () => {
    const [dropdownItem, setDropdownItem] = useState<DropdownItem | null>(null);
    const [calendarValue, setCalendarValue] = useState<string | Date | Date[] | null>(null);
    const dropdownItems: DropdownItem[] = useMemo(
        () => [
            { name: 'Option 1', code: 'Option 1' },
            { name: 'Option 2', code: 'Option 2' },
            { name: 'Option 3', code: 'Option 3' }
        ],
        []
    );

    useEffect(() => {
        setDropdownItem(dropdownItems[0]);
    }, [dropdownItems]);

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card p-fluid">
                    <h4>Үүрэг даалгавар өгөх</h4>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="name2">Эхлэх хугацаа</label>
                            <InputTextarea id="Бичих" rows={1} />
                        </div>
                        <div className="field col">
                            <label htmlFor="email2">Дуусах хугацаа</label>
                            <InputTextarea id="Бичих" rows={1} />
                        </div>
                    </div>
                    <h6>Үүрэг даалгавар</h6>
                    <div className="field">
                        <InputTextarea id="Бичих" rows={5} />
                    </div>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="email2">Гүйцэтгэх албан тушаал</label>
                            <InputTextarea id="Бичих" rows={1.5} />
                            <InputTextarea id="Бичих" rows={1.5} />
                            <InputTextarea id="Бичих" rows={1.5} />
                            <InputTextarea id="Бичих" rows={1.5} />
                            <div className="flex align-items-center justify-content-center">
                                <Button label="Хадгалах" style={{ width: 250, height: 50, position: 'relative' }}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="col-12 md:col-6"> */}

            <div className="col-12">
                <div className="card">
                    <h4>Хурлын бүртгэл хийх</h4>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-8 ">
                            <label htmlFor="firstname2">Хурал, хурлын огноо</label>
                            <InputText id="firstname2" type="text" />
                        </div>

                        <div className="field col-6 md:col-3 mb:col-3">
                            <label>Календарь</label>
                            <Calendar showIcon showButtonBar value={calendarValue} onChange={(e) => setCalendarValue(e.value ?? null)} />
                        </div>

                        <div className="field col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" rows={4} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormLayoutDemo;
