import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { PascalCasePipe } from '../services/pascal-case.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-dropdown',
  standalone: true,
  imports: [FormsModule, PascalCasePipe, CommonModule],
  templateUrl: './search-dropdown.component.html',
  styleUrl: './search-dropdown.component.css'
})
export class SearchDropdownComponent {
  @Input() options: any[] = [];
  @Input() selectedOption: string | null = null;
  @Input() placeHolder: string | null = null
  @Output() selectedOptionChange = new EventEmitter<string | null>();

  searchText: string = '';
  filteredOptions: string[] = [];
  isDropdownVisible: boolean = false;

  ngOnInit() {
    // this.filteredOptions = this.options;
    // console.log(this.filteredOptions)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.filteredOptions = this.options;
    }
  }


  filterOptions() {
    if (!this.searchText) {
      this.filteredOptions = this.options;
    } else {
      this.filteredOptions = this.options.filter(option =>
        option.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  showAllOptions() {
    this.isDropdownVisible = true; // Show dropdown when focused
    this.filteredOptions = this.options; // Show all options
  }

  selectOption(option: string) {
    this.selectedOption = option; // Set the selected option
    this.searchText = option; // Set search text to selected option
    this.isDropdownVisible = false; // Hide dropdown after selection
    this.selectedOptionChange.emit(this.selectedOption); // Emit the change event
  }

  displayOptions() {
    console.log("displayOptions")
    this.isDropdownVisible = false;
  }
}
