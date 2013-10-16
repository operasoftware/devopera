Title: Creating Accessible Data Tables
----
Date: 2008-01-18 13:10:37
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

        
    <p>
        This article demonstrates how to code accessible data tables in (X)HTML, enabling visually impaired users who employ assistive technologies to interpret the table data. Two views of a tabular data table are presented and discussed.
    </p>
    <ol>
        <li><strong>Source Markup - Vertical View:</strong> the table markup as written in a source code/text editor</li>
        <li><strong>Source Markup - Linear View:</strong> the table markup as an assistive device will interpret it</li>
    </ol>
   
    <h2>
        Source Markup: Vertical View</h2>
    <p>
        This is how accessible data table markup appears when written in a text editor. Each element must be correctly opened, closed, and <strong>correctly nested</strong>.</p>
    <pre>
&lt;table summary=&quot;contains accessible tablular data&quot;&gt;
    &lt;caption&gt;Accessible Data Table&lt;/caption&gt;
        &lt;thead&gt;
            &lt;tr&gt;
                &lt;th scope=&quot;col&quot;&gt;Column 1&lt;/th&gt;
                &lt;th scope=&quot;col&quot;&gt;Column 2&lt;/th&gt;
                &lt;th scope=&quot;col&quot;&gt;Column 3&lt;/th&gt;
            &lt;/tr&gt;     
        &lt;/thead&gt;        
        &lt;tfoot&gt;&lt;tr&gt;&lt;td colspan=&quot;3&quot;&gt;End table&lt;/td&gt;&lt;/tr&gt;&lt;/tfoot&gt;        
        &lt;tbody&gt;        
            &lt;tr&gt;    
                &lt;th scope=&quot;row&quot;&gt;Row A&lt;/th&gt;
                    &lt;td&gt;data&lt;/td&gt;
                    &lt;td&gt;data&lt;/td&gt;
            &lt;/tr&gt;    
            &lt;tr&gt;    
                &lt;th scope=&quot;row&quot;&gt;Row B&lt;/th&gt;
                    &lt;td&gt;data&lt;/td&gt;
                    &lt;td&gt;data&lt;/td&gt;
            &lt;/tr&gt;        
            &lt;tr&gt;        
                 &lt;th scope=&quot;row&quot;&gt;Row C&lt;/th&gt;   
                    &lt;td&gt;data&lt;/td&gt;
                    &lt;td&gt;data&lt;/td&gt;
            &lt;/tr&gt;        
            &lt;tr&gt;       
                 &lt;th scope=&quot;row&quot;&gt;Row D&lt;/th&gt; 
                    &lt;td&gt;data&lt;/td&gt;
                    &lt;td&gt;data&lt;/td&gt;
            &lt;/tr&gt;     
        &lt;/tbody&gt;         
&lt;/table&gt;              
</pre>

<p>The table looks as follows when rendered:</p>

<table summary="Contains accessible tablular data" width="400">
        <caption>
            Accessible Data Table</caption>
        <thead>
            <tr>
                <th scope="col">
                    Column 1</th>
                <th scope="col">
                    Column 2
                </th>
                <th scope="col">
                    Column 3</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="3">
                    End table</td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <th scope="row">
                    Row A</th>
                <td>
                    data</td>
                <td>
                    data</td>
            </tr>
            <tr>
                <th scope="row">
                    Row B
                </th>
                <td>
                    data
                </td>
                <td>
                    data
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Row C
                </th>
                <td>
                    data
                </td>
                <td>
                    data
                </td>
            </tr>
            <tr>
                <th scope="row">
                    Row D
                </th>
                <td>
                    data</td>
                <td>
                    data</td>
            </tr>
        </tbody>
    </table>

    <h3>
        Defining the markup</h3>
   
   <p>Let&#39;s break this down and look at what all the different parts of the table mean:</p>
   
   <dl>
        <dt><strong>table element</strong> - <code>&lt;table&gt;&lt;/table&gt;</code></dt>
        <dd>
            This element <strong>starts</strong> and <strong>ends</strong> a data table.</dd>
        <dt><strong>summary attribute</strong> - <code>summary=&quot;&quot;</code></dt>
        <dd>
            This attribute is added to the opening <code>table</code> element.</dd>
        <dd>
            It can be acknowledged by a screenreader, but it will not be rendered in a graphical browser view of the data table.</dd>
        <dd>
            It is implemented to give a short idea of what is contained within the data table.</dd>
        <dd>
            <strong>Important:</strong> Following web standards and accessibility guidelines, always try to keep your attribute value descriptions as concise as possible.</dd>
        <dt><strong>caption element</strong> - <code>&lt;caption&gt;&lt;/caption&gt;</code></dt>
  <dd>
  According to web standards, the <code>caption</code> element should accompany all HTML data tables.</dd> 
  <dd>
  Its opening tag comes directly after the opening <code>&lt;table&gt;</code> tag.</dd>
  <dd>
  When added to your tabular data table markup, it: 
  <ul>
  <li>Gives a short descriptive title to the data table</li>
  <li>Is visible in browser view</li>
  <li>Is easily identified by assistive technologies</li> 
  <li>Is discoverable by search engines</li>
  </ul>
  </dd>
       
        <dt><strong>table header element</strong> - <code>&lt;thead&gt;&lt;/thead&gt;</code></dt>
        <dd>
            Not to be confused with the table heading element <code>&lt;th&gt;&lt;/th&gt;</code>, this element defines the table header section of the data table.</dd>
        <dd>
            Its opening tag is placed directly after the <code>caption</code> closing tag <code>&lt;/caption&gt;</code> and directly before the first table row <code>&lt;tr&gt;</code> opening tag.</dd>
        <dt><strong>table footer element</strong> - <code>&lt;tfoot&gt;&lt;/tfoot&gt;</code></dt>
        <dd>
            This element defines the footer section of the data table.</dd>
        <dd>
            It is an optional addition and can be omitted.</dd>
        <dd>
            Note: If you use it, it must be placed directly <em>before</em> the table body opening tag <code>&lt;tbody&gt;</code>.</dd>
        <dt><strong>colspan attribute</strong> - <code>colspan=&quot;&quot;</code></dt>
        <dd>
            This attribute is added to the opening table data element tag <code>&lt;td colspan=&quot;&quot;&gt;</code>, which is part of the table footer element section.
        </dd>
        <dd>
            Enter the <em>number of columns</em> you want to span between the quotation marks.</dd>
        <dd>
            It enables the table footer to safely span all columns without a break, eliminating the vertical column lines.</dd>
        <dt><strong>table body element</strong> - <code>&lt;tbody&gt;&lt;/tbody&gt;</code></dt>
        <dd>
            This element defines the body area of the table and surrounds its contents.</dd>
        <dd>
            It comes directly after the closing table footer element <code>&lt;/tfoot&gt;</code>, and before the opening table row element <code>&lt;tr&gt;</code>.</dd>
        <dt><strong>table row element</strong> - <code>&lt;tr&gt;&lt;/tr&gt;</code></dt>
        <dd>
            This element marks the start and end of a data table row.</dd>
        <dt><strong>table heading element</strong> - <code>&lt;th&gt;&lt;/th&gt;</code></dt>
        <dd>
            This element identifies our data table rows and columns.</dd>
        <dd>
            You can now apply the <code>scope</code> attribute <code>scope=&quot;&quot;</code> in the opening table heading tag <code>&lt;th scope=&quot;&quot;&gt;</code> to define our rows and columns.</dd>
        <dt><strong>scope attribute</strong> - <code>scope=&quot;&quot;</code></dt>
        <dd>
            You can use the <code>scope</code> attribute to declare a table heading element <code>&lt;th&gt;&lt;/th&gt;</code> either as a row or a column.</dd>
        <dd>
            It is inserted in the opening table heading element tag, for example <code>&lt;th scope=&quot;row&quot;&gt;&lt;/th&gt;</code>.</dd>
        <dt><strong>table data element</strong> - <code>&lt;td&gt;&lt;/td&gt;</code></dt>
        <dd>
            This element contains tabular data.</dd>
        <dd>
            It is located at the <strong>intersection</strong> of a column and row.</dd>
    </dl>
    <h2>
        Source Markup: Linear View</h2>
    <p>
        Markup is authored in a vertical manner (as in the previous code block - Source Markup: Vertical View). The following tabular data table illustrates markup elements and attributes in <strong><em>linear</em></strong> order, as rendered by a user agent.</p>
    <table summary="accessible data table">
        <tr>
            <td colspan="3">
                &lt;table summary=&quot;Contains accessible tablular data&quot;&gt;</td>
        </tr>
        <tr>
            <td colspan="3">
                &lt;caption&gt;Accessible Tabular Data Table&lt;/caption&gt;</td>
        </tr>
        <tr>
            <th scope="col">
                &lt;thead&gt;&lt;tr&gt;&lt;th scope=&quot;col&quot;&gt;Column 1&lt;/th&gt;</th>
            <th scope="col">
                &lt;th scope=&quot;col&quot;&gt;Column 2&lt;/th&gt;</th>
            <th scope="col">
                &lt;th scope=&quot;col&quot;&gt;Column 3&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;</th>
        </tr>
        <tr>
            <td colspan="3">
                &lt;tfoot&gt;&lt;tr&gt;&lt;td colspan=&quot;3&quot;&gt; End table&lt;/td&gt;&lt;/tr&gt;&lt;/tfoot&gt;</td>
        </tr>
        <tr>
            <th scope="row">
                &lt;tbody&gt;&lt;tr&gt;&lt;th scope=&quot;row&quot;&gt;Row A&lt;/th&gt;</th>
            <td>
                &lt;td&gt;data&lt;/td&gt;</td>
            <td>
                &lt;td&gt;data&lt;/td&gt;&lt;/tr&gt;</td>
        </tr>
        <tr>
            <th scope="row">
                &lt;tr&gt;&lt;th scope=&quot;row&quot;&gt;Row B&lt;/th&gt;</th>
            <td>
                &lt;td&gt;data&lt;/td&gt;</td>
            <td>
                &lt;td&gt;data&lt;/td&gt;&lt;/tr&gt;</td>
        </tr>
        <tr>
            <th scope="row">
                &lt;tr&gt;&lt;th scope=&quot;row&quot;&gt;Row C&lt;/th&gt;</th>
            <td>
                &lt;td&gt;data&lt;/td&gt;
            </td>
            <td>
                &lt;td&gt;data&lt;/td&gt;&lt;/tr&gt;</td>
        </tr>
        <tr>
            <th scope="row">
                &lt;tr&gt;&lt;th scope=&quot;row&quot;&gt;Row D&lt;/th&gt;</th>
            <td>
                &lt;td&gt;data&lt;/td&gt;</td>
            <td>
                &lt;td&gt;data&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;</td>
        </tr>
        <tr>
            <td colspan="3">
                &lt;/table&gt;</td>
        </tr>
    </table>
    <h3>
        Assistive Technology linearization</h3>
    <p>
        Now that we&#39;ve seen the source markup in linear view, lets look at how an Assistive Technology handles it. These devices read a table starting with the first cell in the first row (1, 1), and proceed horizontally to the end of that row (1, 3). It then
        moves to the first cell in the next row and proceeds to the end of that row, and so on until the end of the table ... although in this case (2,1) is defined as the footer, so it moves on to (3,1) and reads (2,1) last. Modern ATs will read all data contained within a cell. Older ATs used to read just the first line of a cell
        and then move to the next cell. This produces major confusion for a user if a cell contains data broken over more than one line. Assigning the coordinates discussed above, an assistive device gives cognitive meaning to the data in the cell.</p>
    <table summary="contains accessible tablular data" width="400">
        <caption>
            Tabular Data Table - Linear Format</caption>
        <thead>
            <tr>
                <th scope="col">
                    1, 1</th>
                <th scope="col">
                    1, 2</th>
                <th scope="col">
                    1, 3</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="3">
                    2, 1</td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <th scope="row">
                    3, 1</th>
                <td>
                    3, 2</td>
                <td>
                    3, 3</td>
            </tr>
            <tr>
                <th scope="row">
                    4, 1</th>
                <td>
                    4, 2</td>
                <td>
                    4, 3</td>
            </tr>
            <tr>
                <th class="acc" scope="row">
                    5, 1</th>
                <td class="acc">
                    5, 2
                </td>
                <td>
                    5, 3</td>
            </tr>
            <tr>
                <th scope="row">
                    6, 1</th>
                <td>
                    6, 2</td>
                <td>
                    6, 3</td>
            </tr>
        </tbody>
    </table>
    
    <h2>
        Summary</h2>
    <p>
        This is a short guide to making HTML data tables accessible. I believe that the most important point of this exercise is to enable tabular data to be understood by <em>all</em> users. If you&#39;re dealing with complex tabular data tables, see if there is
        a logical way to break them up into simpler units. Again, we&#39;re striving for a quick and easy understanding of the data. Please remember that the foundation of any accessible web page is code written to current web standards.</p>
